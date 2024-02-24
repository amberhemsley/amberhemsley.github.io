import logo from '../logo.svg';
import '../App.css';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import PermanentDrawer from "../components/Menu/PermanentDrawer";
import React from "react";

const Misc = () => {
    return (
        <>
            <head>
                <meta/>
                <title>Misc</title>
            </head>
            <header className="Welcome!">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <body>
            <Tabs>
                <TabList>
                    <Tab >1</Tab>
                    <Tab>2</Tab>
                    <Tab>3</Tab>
                </TabList>
                <TabPanel></TabPanel>
            </Tabs>


            </body>
        </>
    );
};

export default Misc;
