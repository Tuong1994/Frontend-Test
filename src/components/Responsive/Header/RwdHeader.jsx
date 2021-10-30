import React, { useEffect, useRef } from 'react';

function RwdHeader({ showMenu, setShowMenu }) {
    const menuRef = useRef();
    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [showMenu])
    useEffect(() => {
        const handleClickOutSide = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setShowMenu(false)
            }
        }
        window.addEventListener("mousedown", handleClickOutSide);
        return () => {
            window.removeEventListener("mousedown", handleClickOutSide);
        }
    })
    return (
        <div className={showMenu ? "rwd-header__nav rwd-header__nav--active" : "rwd-header__nav"}>
            <div className={showMenu ? "nav__wrapper nav__wrapper--active" : "nav__wrapper"} ref={menuRef}>
                <div className="wrapper__button" onClick={() => {
                    setShowMenu(false);
                }}>
                    X
                </div>
                <div className="wrapper__list">
                    <div className="list__link">
                        <a href="#" className="link">INTRODUCTION</a>
                    </div>
                    <div className="list__link">
                        <a href="#" className="link">SOLUTION</a>
                    </div>
                    <div className="list__link">
                        <a href="#" className="link">RATE PLAN</a>
                    </div>
                    <div className="list__link">
                        <a href="#" className="link">LOGIN</a>
                    </div>
                    <div className="list__link">
                        <a href="#" className="link">APPLY FOR FREE USER</a>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default RwdHeader;