import { FileResponse, commandTypes, nodeTypes, responseTypes } from "./Enums";

class Folder {
    constructor(name, {
        father=undefined, 
        childrenFolders=undefined, 
        childrenFiles=undefined
    } = {}) {
        this.name = name;
        this.father = father;
        this.childrenFolders = childrenFolders? childrenFolders.map(children => {
            children.father = this
            return children
        }): [];
        this.childrenFiles = childrenFiles? childrenFiles: [];
    }
    goUp () {
        if (this.father) {
            return new FileResponse(responseTypes.NOTHING, {folder: this.father})
        }
        return new FileResponse(responseTypes.SHOWERROR, {message: "it's head of tree"})
    } 
    goDown (folderName) {
        let index = this.childrenFolders.findIndex(folder => folder.name === folderName)
        if (index != -1) {
            return new FileResponse(responseTypes.NOTHING, {folder: this.childrenFolders[index]})
        }
        return new FileResponse(responseTypes.SHOWERROR, {message: "This folder doesn't exist"})
    }
    ls () {
        let response = []
        this.childrenFolders.forEach(folder => response.push({
            nodeType: nodeTypes.FOLDER,
            name: folder.name
        }))
        this.childrenFiles.forEach(file => response.push({
            nodeType: nodeTypes.FILE,
            name: file.name
        }))
        return new FileResponse(responseTypes.SHOWINFOLIST, {list: response}) 
    }
    open (fileName) {
        return new FileResponse(responseTypes.SHOWCOMPONENT, {component: "1"})
    }
}

class File {
    constructor(name, component) {
        this.name = name;
        this.component = component;
    }
}

class Tree {
    constructor(homeFolder) {
        this.currentNode = homeFolder
    }
    currentDirectory () {
        return this.currentNode.name
    }
    handleRequest(request) {
        request = request.split(" ")
        console.log(request)
        if (request.length > 2) {
            return new FileResponse(responseTypes.SHOWERROR, {message: "Too many words in request!"}) 
        }
        if (request[0] == commandTypes.cd) {
            let response = ""
            if (request[1] === '..') {
                response = this.currentNode.goUp()
            } else {
                response = this.currentNode.goDown(request[1])
            }
            if (response.responseType == responseTypes.NOTHING) {
                this.currentNode = response.data.folder
                return new FileResponse(responseTypes.NOTHING, {})
            }
            return response
        } else if (request[0] == commandTypes.ls && request.length === 1) {
            return this.currentNode.ls()
        } else if (request[0] == commandTypes.open) {
            return this.currentNode.open(request[1])
        }
        else {
            return new FileResponse(responseTypes.SHOWERROR, {message: "Sorry bro, I didn't get it"}) 
        }
    }
}

let contacts = new File('contacts', "")

let project1 = new File('project1', "")
let project2 = new File('project2', "")
let project3 = new File('project3', "")

let summary = new File('summary', "")
let education = new File('education', "")
let jobs = new File('jobs', "")

let about = new Folder('about', {childrenFiles : [summary, education, jobs]})
let projects = new Folder('projects', {childrenFiles : [project1, project2, project3]})

let home = new Folder('home', {childrenFiles : [contacts], childrenFolders : [about, projects]})

const FilesTree = new Tree(home);
export default FilesTree; 
