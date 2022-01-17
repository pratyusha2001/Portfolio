import Wave from "react-wavify";
import Contact from "./Contact";
import "./comp.css"

const Footer = () => {
    return (
        <div id="footer">
            <div id="waves">
                <Wave options={{ speed: 0.5 }} fill="rgb(223, 71, 51)" ></Wave>
                <Contact/>
            </div>
        </div>
    )
}

export default Footer;