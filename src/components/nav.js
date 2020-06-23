import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearText, setText} from '../actions/index';

export default function Nav(props) {

    const dispatch = useDispatch();

    const style = {
        width: '100%',
        height: '10vh',
        backgroundImage: "url("+window.location.origin+"/images/background.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed"
    }   

    const sticky = useSelector(state => state.sticky)
    const navText = useSelector(state => state.navText)

    function handleClick(item) {
        const navSpace = (document.documentElement.clientHeight * 0.1);
        const top = item.current.getBoundingClientRect().top 
        const offset = sticky && item===props.aboutRef ? top : top - navSpace;
        window.scrollTo({
            top: offset + window.pageYOffset,
            behavior: "smooth"
        });
    }
    
    return (
        <div style={style} className={sticky ? "navbar-sticky d-flex align-items-center" : "d-flex align-items-center"}>
            <nav className="w-100 d-flex align-items-center justify-content-between">
                <ul className="main">
                    <li onMouseLeave={e => dispatch(clearText())} onMouseEnter={e=> dispatch(setText("About"))} onClick={() => handleClick(props.aboutRef)}>
                        {navText==="About" ? <div>About</div> : <i className="fas fa-user-alt"></i>}
                    </li>
                    <li onMouseLeave={e => dispatch(clearText())} onMouseEnter={e=> dispatch(setText("Projects"))} onClick={() => handleClick(props.projectRef)}>
                        {navText==="Projects" ? <div>Projects</div> : <i className="fas fa-project-diagram"></i>}
                    </li>
                    <li onMouseLeave={e => dispatch(clearText())} onMouseEnter={e=> dispatch(setText("Contact"))} onClick={() => handleClick(props.contactRef)}>
                        {navText==="Contact" ? <div>Contact</div> : <i className="fas fa-feather"></i>}
                    </li>
                </ul>
            </nav>
        </div>
    );
}