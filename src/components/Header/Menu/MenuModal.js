import { useEffect } from 'react';
import './MenuModal.css'

function MenuModal({ closeMenu }) {
    let closeWindow = () => {
        closeMenu(false)
    }
    useEffect(() => {
        const keyDownHandler = event => {    
          if (event.key === 'Escape') {
            event.preventDefault();
            closeWindow();
          }
        };
    
        document.addEventListener('keydown', keyDownHandler);
    
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      }, []);
    return ( 
        <div className="menu-nodal-container">
            <div className="menu-modal-item" onClick={closeWindow}>
                HOME
            </div>
            <div className="menu-modal-item" onClick={closeWindow}>
                ABOUT
            </div>
            <div className="menu-modal-item" onClick={closeWindow}>
                PROJECTS
            </div>
            <div className="menu-modal-item" onClick={closeWindow}>
                CONTACTS
            </div>
        </div>
     );
}

export default MenuModal;