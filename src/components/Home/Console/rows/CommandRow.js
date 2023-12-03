import LocationSpan from "./LocationSpan";

function CommandRow({message}) {
    return ( 
        <div className="console-row">
            <LocationSpan location={message.location} />
            <div>
                {message.text}
            </div>
        </div>
     );
}

export default CommandRow;