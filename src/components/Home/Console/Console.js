import { useEffect, useState } from 'react';
import { Message, messageTypes, responseStates, responseTypes } from '../../../utils/Enums';
import './Console.css'
import PreviousMessagesField from './PreviousMessagesField';
import InputField from './rows/InputField';
import FileTree from '../../../utils/FileTree';
import { useNavigate } from 'react-router-dom';
function Console() {
    const navigate = useNavigate();
    let [previousMessages, setPreviousMessages] = useState([
        new Message(messageTypes.COMMAND, {
            location: "home",
            text: "Welcome to my website! I'm Dmitry Rylov, a web developer ready to transform your ideas into unique web applications. Feel free to explore, and if you need assistance, use the 'help' feature for additional guidance on using the command line."
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
        else if (response.responseType == responseTypes.SHOWCOMPONENT) {
            setPreviousMessages([...previousMessages, lastMessage])
            try {
                let top = document.getElementById(response.data.component).offsetTop;
                window.scrollTo({
                    top: top,
                    left: 0,
                    behavior: "smooth",
                  });
            }
            catch {
                let errorMessage = new Message(messageTypes.ERROR, "We can't open it because we don't have this element")
                setPreviousMessages([...previousMessages, lastMessage, errorMessage])
            }
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