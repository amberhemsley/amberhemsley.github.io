import logo from '../logo.svg';
import '../App.css';
import App from "../App";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';


const Experience = () => {
    return (
        <>
            <head>
                <meta charSet="UTF-8"/>
                <title>Experience</title>
            </head>
            <body className="App">
            <Tabs>
                <TabList>
                    <Tab >Work</Tab>
                    <Tab>Uni</Tab>
                    <Tab>School</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                    <Tabs>
                        <TabList>
                            <Tab>DOJO</Tab>
                            <Tab>other</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>Go, kotlin, kubernetes, redis, rest, websockets, mongo, hexagonal architecture, pubsub</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 1</h2>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                    <Tabs>
                        <TabList>
                            <Tab>Projects</Tab>
                            <Tab>Modules</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 1</h2>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                    <Tabs>
                        <TabList>
                            <Tab>Projects</Tab>
                            <Tab>Subjects</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 1</h2>
                        </TabPanel>
                    </Tabs>
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
            </Tabs>
            </body>
        </>
    );
};

export default Experience;