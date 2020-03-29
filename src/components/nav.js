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

    const current = useSelector(state => state.currentPage);
    const sticky = useSelector(state => state.sticky)
    const navText = useSelector(state => state.navText)

    function handleClick(e, item) {
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
            <nav className="w-100 d-flex">
                <ul className="navbar nav w-50">
                    <li className={current==="about" ? "mx-2 my-2 text-center active" : "mx-2 text-center"}>
                        <div className="btn about" onMouseLeave={e => dispatch(clearText())} onMouseEnter={e=> dispatch(setText("About"))} onClick={e => handleClick(e, props.aboutRef)}>
                            {navText==="About" ? <span>About</span> : <i class="fas fa-user-alt"></i>}
                        </div>
                    </li>
                    <li className={current==="projects" ? "mx-2 text-center active" : "mx-2 text-center"}>
                        <div className="btn" onMouseLeave={e => dispatch(clearText())} onMouseEnter={e=> dispatch(setText("Projects"))} onClick={e => handleClick(e, props.projectRef)}>
                            {navText==="Projects" ? <span>Projects</span> : <i class="fas fa-project-diagram"></i>}
                        </div>
                    </li>
                    <li className={current==="contact" ? "mx-2 text-center active" : "mx-2 text-center"}>
                        <div className="btn" onMouseLeave={e => dispatch(clearText())} onMouseEnter={e=> dispatch(setText("Contact"))} onClick={e => handleClick(e, props.contactRef)}>
                            {navText==="Contact" ? <span>Contact</span> : <i class="fas fa-feather"></i>}
                        </div>
                    </li>
                </ul>
                <ul className="navbar nav ml-auto">
                    <li className="text-center mx-2">
                        <div className="btn">
                            <i className="far fa-file"></i>
                        </div>
                    </li>
                    <li className="text-center mx-2">
                        <div className="btn">
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                    </li>
                    <li className="text-center mx-2">
                        <div className="btn">
                            <i class="fab fa-github"></i>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}