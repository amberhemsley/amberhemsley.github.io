import logo from '../logo.svg';
import '../App.css';
import App from "../App";

// create a React component that renders a buisness card which flips when its clicked on
function flipCard() {
    var card = document.getElementById("card");
    card.classList.toggle("flip");
}
const Contact = () => {
    return (
        <>
            <head>
                <meta charSet="UTF-8"/>
                <title>Contact</title>

            </head>
            <body>
                <div>
                    <p>Email: amberhemsley02@gmail.com</p>
                    <p>LinkedIn: <a href="https://uk.linkedin.com/in/amber-hemsley-7061971b8">Amber Hemsley</a></p>
                </div>
                <div className="card" onClick={flipCard}>
                    <div className="front">
                        <p>Amber Hemsley</p>
                        <p>Software Engineer</p>
                    </div>
                    <div className="back">
                        <p>Amber Hemsley</p>
                        <p>Software Engineer</p>
                    </div>
                </div>
            </body>
        </>
    );
};

export default Contact;