import { nodeTypes } from "../../../../utils/Enums";

function InfoListRow({list}) {
    function isArray (text) {
        let result = text.map(message => <div style={{color: message.nodeType === nodeTypes.FILE? "#ECE4D8": "darkblue"}}>{message.name}</div>)
        return result
    }
    return ( 
        <div className="list console-row">
            {isArray(list)}
        </div>
     );
}

export default InfoListRow;