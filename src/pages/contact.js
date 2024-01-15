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
        <div className="contact-page">
            <head>
                <meta charSet="UTF-8"/>
                <title>Contact</title>

            </head>
            <body>
                <div style={
                    {
                        display:"flex",
                        background:'#EFEFEF',
                        alignItems:"center",
                        flexDirection:"row",
                        borderRadius:'25px',
                        padding: '40px',
                        width:"fit-content",
                    }
                }>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"start"}}>
                        <text style={{color:"#35605A", fontWeight: "bold", fontSize: 18}}>Email: </text>
                        <line></line>
                        <text style={{color:"#35605A", fontWeight: "bold", fontSize: 18}}>LinkedIn: </text>

                    </div>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"start", paddingLeft:'10px'}}>
                        <a href="mailto:amberhemsley02@gmail.com" style={{color:'#DA8FB1'}}> amberhemsley02@gmail.com</a>
                        <line></line>
                        <a href="https://uk.linkedin.com/in/amber-hemsley-7061971b8" style={{color:'#DA8FB1'}}> Amber Hemsley</a>
                    </div>
                </div>
            </body>
        </div>
    );
};

export default Contact;