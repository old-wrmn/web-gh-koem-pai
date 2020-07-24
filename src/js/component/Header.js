import React from "react";
import Logo from "./header/Logo";
import SocialMedia from "./header/SocialMedia";
import MenuTrigger from "./header/Menu";

class Header extends React.Component {
    render() {
        return (
            <nav className="flex items-center justify-between flex-wrap bg-leaf p-6" style={{height:"12vh"}}>
                <div className="flex">
                    <MenuTrigger />
                    <Logo />
                </div>
                <SocialMedia />
            </nav>
        );
    }
}

export default Header;
