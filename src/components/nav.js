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
                <ul className={sticky ? "navbar nav w-50 main": "navbar nav mx-auto main w-50"}>
                    <li className={current==="about" ? "mx-2 my-2 text-center active" : "mx-2"}>
                        <div className="btn about" onMouseLeave={e => dispatch(clearText())} onMouseEnter={e=> dispatch(setText("About"))} onClick={e => handleClick(e, props.aboutRef)}>
                            {navText==="About" ? <div>About</div> : <i class="fas fa-user-alt"></i>}
                        </div>
                    </li>
                    <li className={current==="projects" ? "mx-2 text-center active" : "mx-2"}>
                        <div className="btn" onMouseLeave={e => dispatch(clearText())} onMouseEnter={e=> dispatch(setText("Projects"))} onClick={e => handleClick(e, props.projectRef)}>
                            {navText==="Projects" ? <div>Projects</div> : <i class="fas fa-project-diagram"></i>}
                        </div>
                    </li>
                    <li className={current==="contact" ? "mx-2 text-center active" : "mx-2"}>
                        <div className="btn" onMouseLeave={e => dispatch(clearText())} onMouseEnter={e=> dispatch(setText("Contact"))} onClick={e => handleClick(e, props.contactRef)}>
                            {navText==="Contact" ? <div>Contact</div> : <i class="fas fa-feather"></i>}
                        </div>
                    </li>
                </ul>
                <ul className={sticky ? "navbar nav ml-auto" : "d-none"}>
                    <li className="text-center">
                        <div className="btn" data-toggle="tooltip" data-placement="bottom" title="Resume">
                            <a className="text-white" href={window.location.origin + "/Resume.pdf"} target="_blank">
                                <i className="far fa-file-pdf"></i>
                            </a>
                        </div>
                    </li>
                    <li className="text-center">
                        <div className="btn" data-toggle="tooltip" data-placement="botttom" title="LinkedIn">
                            <a className="text-white" href="https://www.linkedin.com/in/peter-lee-2973371a4/" target="_blank">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </li>
                    <li className="text-center">
                        <div className="btn" data-toggle="tooltip" data-placement="bottom" title="Github">
                            <a className="text-white" href="https://github.com/PedroL33" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}