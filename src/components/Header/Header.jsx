import React, { useState } from 'react';
import RwdHeader from '../Responsive/Header/RwdHeader';

function Header(props) {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="header">
            <div className="header__logo">
                <img src="../img/logo/logo.png" alt="logo" />
            </div>
            <div className="header__nav">
                <div className="nav__link">
                    <a href="#" className="link">INTRODUCTION</a>
                </div>
                <div className="nav__link">
                    <a href="#" className="link">SOLUTION</a>
                </div>
                <div className="nav__link nav__link--line">
                    <a href="#" className="link">RATE PLAN</a>
                </div>
                <div className="nav__link">
                    <a href="#" className="link">LOGIN</a>
                </div>
                <div className="nav__link">
                    <a href="#" className="link">APPLY FOR FREE USER</a>
                </div>
            </div>
            <div className="header__button" onClick={() => {
                setShowMenu(true);
            }}>
                <div className="button__wrapper">
                    <div className="wrapper__line"></div>
                    <div className="wrapper__line"></div>
                    <div className="wrapper__line"></div>
                </div>
            </div>
            <RwdHeader showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
    );
}

export default Header;