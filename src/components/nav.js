import React from 'react';
import { useSelector } from 'react-redux';

export default function Nav() {
    const style = {
        // background: 'linear-gradient(to right, #000428, #004e92)',
        // color: 'white',
        width: '100%',
        height: '15vh'
    }

    const current = useSelector(state => state.currentPage);
    const sticky = useSelector(state => state.sticky)
    
    return (
        <div className="d-flex align-items-center">
            <div style={style} className={sticky ? "navbar-sticky d-flex align-items-center" : "d-flex align-items-center"}>
                <nav id="navbar" className="navbar w-75 mx-auto">
                    <ul className="navbar nav w-100">
                        <li className={current!=="" ? "step text-center active" : "step text-center"}>
                            <a href="#projects"><i class="fas fa-project-diagram"></i></a>
                            <div className="step-label">Projects</div>
                        </li>
                        <li className={current!=="" ? "active spacer" : "spacer" }></li>
                        <li className={current==="about" || current==="contact" ? "step text-center active" : "step text-center"}>
                            <a href="#about"><i class="fas fa-user-alt"></i></a>
                            <div className="step-label">About</div>
                        </li>
                        <li className={current==="about" || current==="contact" ? "active spacer" : "spacer" }></li>
                        <li className={current==="contact" ? "step text-center active" : "step text-center"}>
                            <a href="#contact"><i class="fas fa-feather"></i></a>
                            <div className="step-label">Contact</div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}