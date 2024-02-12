import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
import logo from "../../logo.svg";

const Navbar = () => {
    return (
        <>
            <Nav>
                <img src="./Logo.png" className="Main-logo" alt="logo"/>
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/experience" activeStyle>
                        Experience
                    </NavLink>
                    <NavLink to="/misc" activeStyle>
                        Miscellaneous
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Me
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
