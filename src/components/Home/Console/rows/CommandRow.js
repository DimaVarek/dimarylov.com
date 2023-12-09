import LocationSpan from "./LocationSpan";

function CommandRow({message}) {
    return ( 
        <div className="console-row">
            <div>
                <LocationSpan location={message.location} />
                {message.text}
            </div>
        </div>
     );
}

export default CommandRow;