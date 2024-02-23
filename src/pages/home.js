import logo from '../logo.svg';
import '../App.css';
import App from "../App";
import React from "react";

function timeSince(date) {

        var seconds = Math.floor((new Date() - date) / 1000);

        var interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval);
        }
}

var age = timeSince(new Date(2002, 9, 7));


const Home = () => {
    return (
        <>
            <head>
                <meta charSet="UTF-8"/>
                <title>Home</title>
            </head>
            <div className="App">
                <header className="Header1">About Me</header>
                <p>
                   I am {age} years old and I'm a software engineer with experience in Go, Java, Python and C#. I am currently studying Computer Science at the University of York going into my third year.
                </p>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                       <text> Learn React</text>
                </header>
            </div>
            );
        </>
    );
};

export default Home;