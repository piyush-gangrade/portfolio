import React, { useState } from "react";
import Project from "./Project";
import "./work.css";
import quizzical from "../../assets/quizzical.png";
import chatapp from "../../assets/chatapp.png";
import portfolio from "../../assets/portfolio.png";

export default function Work() {
    const [view, setView] = useState(false)
     return <>
        <div id="work">
            <div className="heading">
                <span className="heading-text" ><span className="purple">#</span>work</span>
            </div>
            <div className="projects-section">
                <Project 
                    projectName="Chatters"
                    projectImg={chatapp}
                    projectDes="A real-time chat application enabling instant messaging and dynamic chat rooms using the MERN stack and Socket.IO"
                    projectLink="https://github.com/piyush-gangrade/chat-app"
                />
                <div className={`hidden ${view?"expended":""}`}>
                    <Project 
                        projectName="Portfolio"
                        projectImg={portfolio}
                        projectDes="A responsive portfolio website built with React.js, showcasing my projects and skills. It features smooth navigation, modern design, and is optimized for all devices."
                        projectLink="https://github.com/piyush-gangrade/portfolio"
                    />
                    <Project 
                        projectName="Quizzical"
                        projectImg={quizzical}
                        projectDes="A quiz website using React.js and the Trivia API, offering an engaging platform for users to test their knowledge across various topics."
                        projectLink="https://github.com/piyush-gangrade/Quizzical-App"
                    />
                </div>
            </div>
            <div className="view-btn-cnt">
                <button className="btn" onClick={()=>setView(!view)}>{view? "View less":"View All"}</button>
            </div>
        </div>
    </>
}