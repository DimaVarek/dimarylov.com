import { useEffect, useState } from 'react';
import { Message, messageTypes, responseStates, responseTypes } from '../../../utils/Enums';
import './Console.css'
import PreviousMessagesField from './PreviousMessagesField';
import InputField from './rows/InputField';
import FileTree from '../../../utils/FileTree';
function Console() {
    let [previousMessages, setPreviousMessages] = useState([
        new Message(messageTypes.COMMAND, {
            location: "home",
            text: "Hi everyone! I'm Dmitry and I'm frontend developer!"
        })
    ])
    let [currentDirectory, setCurrentDirectory] = useState(FileTree.currentDirectory()) 

    function inputHandler (request) {
        let lastMessage = new Message(messageTypes.COMMAND, {
                location: currentDirectory,
                text: request
        })
        let response = FileTree.handleRequest(request)
        console.log(response)
        if (response.responseType === responseTypes.SHOWERROR) {
            let errorMessage = new Message(messageTypes.ERROR, response.data.message)
            setPreviousMessages([...previousMessages, lastMessage, errorMessage])
        } 
        else if (response.responseType == responseTypes.NOTHING) {
                setPreviousMessages([...previousMessages, lastMessage])
        }
        else if (response.responseType == responseTypes.SHOWINFOLIST) {
            let infoMessage = new Message(messageTypes.INFOLIST, response.data.list)
            setPreviousMessages([...previousMessages, lastMessage, infoMessage])
        }
        else if (response.responseType == responseTypes.SHOWINFOMESSAGE) {
            let infoMessage = new Message(messageTypes.INFOMESSAGE, response.data.message)
            setPreviousMessages([...previousMessages, lastMessage, infoMessage])
        }
        else {
            setPreviousMessages([...previousMessages, lastMessage])
            // and show component
        }

        setCurrentDirectory(FileTree.currentDirectory())
    }

    useEffect(() => {
        document.getElementById('input-field').focus()
        var objDiv = document.getElementById('console-container');
        objDiv.scrollTop = objDiv.scrollHeight;
    })

    return ( 
    <div className="console-container" id='console-container'>
        <PreviousMessagesField previousMessages={previousMessages} />
        <InputField location={currentDirectory} handler={inputHandler} />
    </div> 
    );
}

export default Console;