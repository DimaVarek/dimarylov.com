import './Header.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useEffect, useState } from 'react';
import MenuModal from './Menu/MenuModal';
function Header() {
    let [openedMenu, setOpenedMenu] = useState(false)
    let openMenu = () => {
        setOpenedMenu(true)
    }
    let closeMenu = () => {
        setOpenedMenu(false)
    }
    return (
        <>
            {openedMenu
            ? 
            <MenuModal closeMenu={closeMenu} /> 
            :  
            <div className="header-container" id="header">
                <div className="header-item" onClick={openMenu}>Menu</div>
                <a href='https://github.com/DimaVarek' target='_blank'>
                    <div className="header-item">GitHub <GitHubIcon /></div>
                </a>
                <a href='https://www.linkedin.com/in/dimarvarek/' target='_blank'>
                    <div className="header-item">LinkedIn <LinkedInIcon /></div>
                </a>
            </div>
            }
        </>
     );
}

export default Header;