import LinkedIn from '@mui/icons-material/LinkedIn';
import './Contacts.css'
import { GitHub, Telegram } from '@mui/icons-material';
function Contacts() {
    return ( 
        <div className="contacts-container" id="contacts">
            <div className="contacts-title">
                Contacts
            </div>
            <a href='https://www.linkedin.com/in/dimarvarek/' target='_blank'>
                <div className='contacts-item'><LinkedIn />: https://www.linkedin.com/in/dimarvarek/</div>
            </a>
            <a href='https://github.com/DimaVarek'  target='_blank'>
                <div className='contacts-item'><GitHub />: https://github.com/DimaVarek</div>
            </a>
            <a href='https://t.me/bibliotekah' target='_blank'>
                <div className='contacts-item'><Telegram />: @bibliotekah</div>
            </a>
        </div>
     );
}

export default Contacts;