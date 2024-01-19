import logo from '../logo.svg';
import '../App.css';
import App from "../App";
import React from "react";


const Home = () => {
    return (
        <>
            <head>
                <meta charSet="UTF-8"/>
                <title>Home</title>
            </head>
            <div className="App">
                <header className="Header1">Welcome</header>
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