import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

function Social() {
    return (
        <div>
            <h3>Contact Us?</h3>
            <FacebookIcon color="primary" style={{ height:"45px",width:"45px" }} /><InstagramIcon color="secondary" style={{ height:"45px",width:"45px" }}/><EmailIcon style={{ color:"orange",height:"45px",width:"45px"}} />
        </div>
    )
}

export default Social
