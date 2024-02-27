import logo from '../logo.svg';
import '../App.css';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import PermanentDrawer from "../components/Menu/PermanentDrawer";
import React from "react";
import theme from "../components/Themes/Themes";
import MenuBlock from "../components/Menu/block";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import Work from "../components/content/work";
import Uni from "../components/content/uni";
import School from "../components/content/school";
import {ThemeProvider} from "@mui/material";
import Typography from "@mui/material/Typography";

const Misc = () => {
    return (
        <ThemeProvider theme={theme}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta charSet="UTF-8"/>
                <title>Misc</title>
            </head>
            <div className="App" style={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexWrap: 'wrap'}}>
                <MenuBlock/>
                <Box sx={{
                    width: 'fix-content',
                    height: 'fit-content',
                    borderRadius: 1,
                    display:"flex",
                    alignItems:"flex-start",
                    justifyContent:"center",
                    flexDirection:"column",
                    p:3,
                    fontFamily: 'Roboto Slab',
                    color: 'text.primary',
                }}>
                    <Typography variant="h5" sx={{fontFamily:"Aqua"}}>More About Me</Typography>
                    <Typography variant="h6">Hobbies</Typography>
                    <Typography variant="body2">
                        I attended Pat Steel School of Dance for 15 years including competing in local competitions throughout
                        secondary school. I took classes in ballet, tap, modern and contemporary taking graded exams and performing
                        in a biannual show. I also performed in my local pantomime though the dance school.

                    </Typography>
                </Box>
            </div>
        </ThemeProvider>
    );
};

export default Misc;
