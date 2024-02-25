import logo from '../logo.svg';
import '../App.css';
import App from "../App";

import PermanentDrawer from "../components/Menu/PermanentDrawer";
import React from "react";
import theme from "../components/Themes/Themes";
import MenuBlock from "../components/Menu/block";
import Box from "@mui/material/Box";
import {ThemeProvider} from "@mui/material";
import Tab from "@mui/material/Tab"
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


const Experience = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event , newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta charSet="UTF-8"/>
                <title>Experience</title>
            </head>
            <div className="App" style={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexWrap: 'wrap'}}>
                <MenuBlock/>
                <Box sx={{
                    width: 'calc(40px + 50vmin)',
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
                    <Box sx={{ width: '100%' }}>
                        <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                                  textColor="primary.dark"
                                  indicatorColor="secondary">
                                <Tab label="Work" value={'1'}/>
                                <Tab label="Uni" value={'2'}/>
                                <Tab label="School" value={'3'}/>
                            </Tabs>
                        </Box>
                        <TabPanel value={'1'} index={0}>
                            <h2>Go, kotlin, kubernetes, redis, rest, websockets, mongo, hexagonal architecture, pubsub</h2>
                        </TabPanel>
                        <TabPanel value={'2'} index={1}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={'3'} index={2}>
                            <table>
                                <thead>
                                <tr>
                                    <th colSpan="2">Results</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>Subject</th>
                                    <th>Grade</th>
                                </tr>
                                <tr>
                                    <td>Computer Science</td>
                                    <td>A*</td>
                                </tr>
                                <tr>
                                    <td>Maths</td>
                                    <td>A*</td>
                                </tr>
                                <tr>
                                    <td>Physics</td>
                                    <td>A</td>
                                </tr>
                                <tr>
                                    <td>Further Maths AS</td>
                                    <td>A</td>
                                </tr>
                                </tbody>
                            </table>
                        </TabPanel>
                        </TabContext>
                    </Box>
                   {/* <Tabs
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                    >
                        <TabList>
                        <Tab value="one" label="Item One" />
                        <Tab value="two" label="Item Two" />
                        <Tab value="three" label="Item Three" />
                    </TabList>
                    </Tabs>*/}
                    {/*
                        <TabPanel sx={{display:'flex '}}>
                            <h2>Any content 3</h2>

                            <div className="table-right">
                                <table>
                                    <thead>
                                    <tr>
                                        <th colSpan="2">Results</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Grade</th>
                                    </tr>
                                    <tr>
                                        <td>Computer Science</td>
                                        <td>A*</td>
                                    </tr>
                                    <tr>
                                        <td>Maths</td>
                                        <td>A*</td>
                                    </tr>
                                    <tr>
                                        <td>Physics</td>
                                        <td>A</td>
                                    </tr>
                                    <tr>
                                        <td>Further Maths AS</td>
                                        <td>A</td>
                                    </tr>
                                    </tbody>
                                </table></div>
                        </TabPanel>
                    </Tabs>*/}
                </Box>
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
                </Box>
            </div>
            );
        </ThemeProvider>

    );
};

export default Experience;