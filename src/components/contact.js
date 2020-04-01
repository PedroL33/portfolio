import React from 'react';
import { useSelector } from 'react-redux';

function Contact() {
    const sticky = useSelector(state => state.sticky)
    const style = {
        height: '90vh',
    }
    return (
        <div className="stickyItem">
            <div style={style}>
                Contact
            </div>
        </div>
    )
}

export default Contact;