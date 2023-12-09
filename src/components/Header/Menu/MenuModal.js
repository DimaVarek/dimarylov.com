import { useEffect } from 'react';
import './MenuModal.css'
import { HashLink } from 'react-router-hash-link';

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
          <HashLink smooth to='/#home'>
            <div className="menu-modal-item" onClick={closeWindow}>
                HOME
            </div>
          </HashLink>
          <HashLink smooth to='/#about'>
            <div className="menu-modal-item" onClick={closeWindow}>
                ABOUT
            </div>
          </HashLink>
          <HashLink smooth to='/#projects'>
            <div className="menu-modal-item" onClick={closeWindow}>
                PROJECTS
            </div>
          </HashLink>
          <HashLink smooth to='/#contacts'>
            <div className="menu-modal-item" onClick={closeWindow}>
                CONTACTS
            </div>
          </HashLink>
        </div>
     );
}

export default MenuModal;