import { messageTypes } from '../../../utils/Enums';
import CommandRow from './rows/CommandRow';
import ErrorRow from './rows/ErrorRow';
import InfoListRow from './rows/InfoListRow';
import InfoRow from './rows/InfoMessageRow';
function PreviousMessagesField({previousMessages}) {
    const messageTypeComponent = new Map([
        [messageTypes.ERROR, message => <ErrorRow message={message} />],
        [messageTypes.INFOMESSAGE, (message) => <InfoRow text={message.text}/>],
        [messageTypes.INFOLIST, message => <InfoListRow list={message} />],
        [messageTypes.COMMAND, (message) => <CommandRow message={message} />]
    ])
    return ( 
        <>
         {previousMessages.map(message => messageTypeComponent.get(message.messageType)(message.message))}
        </>
     );
}

export default PreviousMessagesField;