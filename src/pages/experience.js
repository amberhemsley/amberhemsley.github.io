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
            <body>
            <Tabs>
                <TabList>
                    <Tab>Work</Tab>
                    <Tab>Uni</Tab>
                    <Tab>School</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
            </body>
        </>
    );
};

export default Experience;