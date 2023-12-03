import './Header.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from 'react';
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
            <div className="header-container">
                <div className="header-item" onClick={openMenu}>Menu</div>
                <div className="header-item">GitHub <GitHubIcon /></div>
                <div className="header-item">LinkedIn <LinkedInIcon /></div>
            </div>
            }
        </>
     );
}

export default Header;