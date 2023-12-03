import LocationSpan from "./LocationSpan";
import './InputField.css'
function InputField({location, handler}) {
    function inputHandler(e) {
        if (e.key === "Enter") 
        {
            handler(e.target.value)
            e.target.value = ""
        }
    }
    return ( 
        <div className="input-field">
            <LocationSpan location={location} />
            <input id="input-field" maxLength={20} onKeyDown={inputHandler}></input>
        </div>
     );
}

export default InputField;