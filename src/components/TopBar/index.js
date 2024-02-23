/*import React from "react";
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

export default Navbar;*/

import * as React from 'react';
import '../../index.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import theme from '../Themes/Themes.js';
import {ThemeProvider} from "@mui/material";
import TemporaryDrawer from '../Menu/index.js'

export default function TopBar() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, bgcolor:'primary.main', width:"100%"}}>
                <AppBar position="static">
                    <Toolbar>
                        <TemporaryDrawer/>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Roboto Slab', fontWeight:'200'}}>
                            Amber Hemsley
                        </Typography>
                        <Button color="inherit">Download CV</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}