const messageTypes = {
    ERROR: 0,
    INFOMESSAGE: 1,
    INFOLIST: 2,
    COMMAND: 3
}

const nodeTypes = {
    FILE: 0,
    FOLDER: 1
}

const responseTypes = {
    NOTHING: 0,
    SHOWINFOMESSAGE: 1,
    SHOWINFOLIST: 2,
    SHOWERROR: 3,
    SHOWCOMPONENT: 4,
}

const commandTypes = {
    cd: "cd",
    ls: 'ls',
    open: "open",
    help: "help"
}

class FileResponse {
    constructor(responseType, data) {
        this.responseType = responseType
        this.data = data
    }
}
class Message{
    constructor(messageType, message) {
        this.messageType = messageType
        this.message = message
    }
}

export {messageTypes, nodeTypes, commandTypes, responseTypes, FileResponse, Message};