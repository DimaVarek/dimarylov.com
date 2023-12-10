import { useEffect } from 'react';
import './MenuModal.css'
import { HashLink } from 'react-router-hash-link';

function MenuModal({ closeMenu }) {
    let closeWindow = (key) => {
        if (key) {
          let top = document.getElementById(key).offsetTop;
          window.scrollTo({
              top: top,
              left: 0,
              behavior: "smooth",
            });
          
        }
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
            <div className="menu-modal-item" onClick={() => closeWindow('home')}>
                HOME
            </div>
            <div className="menu-modal-item" onClick={() => closeWindow('about')}>
                ABOUT
            </div>
            <div className="menu-modal-item" onClick={() => closeWindow('projects')}>
                PROJECTS
            </div>
            <div className="menu-modal-item" onClick={() => closeWindow('contacts')}>
                CONTACTS
            </div>

        </div>
     );
}

export default MenuModal;