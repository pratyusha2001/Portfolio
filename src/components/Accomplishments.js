import React from 'react';
import { Container} from "react-bootstrap";
import "./comp.css"

const Accomplishments = () => {
    const accomp = ["Speaker at an event Sensei, organized by Alexa Developers SRM",
        "Hackerrank verified CSS skill",
        "Hackerrank verified Java(Basic) skill",
        "5 star coder for C++ at Hackerrank",
        "3 star coder for C at Hackerrank",
        "3 star coder for Java at Hackerrank",
        "Web Development Intern at LetsGrowMore",
        "Completed 100 programs in C Programming under ELAB"];
    return (
        <div id="accomp">
            <Container>
                <p className="accomp-header">Accomplishments</p>
                {accomp.map((list) => (
                    <div className="accomp-description">
                        <svg style={{ margin: "10px", marginLeft: "0px" }} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="rgb(252,194,0)" class="bi bi-trophy-fill" viewBox="0 0 16 16">
                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
                        </svg>
                        {list}
                    </div>
                ))}
            </Container>
        </div>
    );
}

export default Accomplishments;