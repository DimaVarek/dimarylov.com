import './Frame.css'
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CloseIcon from '@mui/icons-material/Close';
function Frame({children, windowName}) {
    return ( 
        <div className="frame-container">
            <div className="frame-header">
                <div className='frame-header-left'>
                    {windowName}
                </div>
                <div className='frame-header-right'>
                    <div className="frame-header-icon"><CloseIcon /></div>
                    <div className="frame-header-icon"><FullscreenIcon /></div>
                </div>
            </div>
            {children}
        </div>
     );
}

export default Frame;