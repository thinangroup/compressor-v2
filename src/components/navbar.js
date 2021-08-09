import React from 'react';
import '../styles/navbar.css';
import MenuListComposition from './mobileNavBar';

function Navbar() {
    return (
        <div>
            <div className="navbarstyle">
                <div >
                    <h1 className='mainHead'><a href="/">COMPRESS THE IMAGE</a></h1>
                </div>
                <div className="navright">
                    <h4 ><a href='/about'>About</a></h4>
                    <h4><a href='/blogs'>Blogs</a></h4>
                    <h4><a href='#social'>Contact Us</a></h4>

                </div>
            </div>
            <div className='hideMe'><MenuListComposition/></div>
        </div>
    )
}

export default Navbar
