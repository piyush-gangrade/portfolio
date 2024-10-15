import React, { useState } from "react";
import Project from "./Project";
import "./work.css";
import quizzical from "../../assets/quizzical.png"


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
                    projectImg={quizzical}
                    projectDes="A real-time chat application enabling instant messaging and dynamic chat rooms using the MERN stack and Socket.IO"
                    projectLink="https://github.com/piyush-gangrade/chat-app"
                />
                <div className={`hidden ${view?"expended":""}`}>
                    <Project 
                        projectName="Quizzical"
                        projectImg={quizzical}
                        projectDes="A quiz website using React.js and the Trivia API, offering an engaging platform for users to test their knowledge across various topics."
                        projectLink="https://github.com/piyush-gangrade/Quizzical-App"
                    />
                    <Project 
                        projectName="Movie Watchlist"
                        projectImg={quizzical}
                        projectDes="A website with HTML, CSS, and Javascript to search for movies using the OMDB API and save favorites to local storage."
                        projectLink="https://github.com/piyush-gangrade/Movie-Watchlist"
                    />
                </div>
            </div>
            <div className="view-btn-cnt">
                <button className="btn" onClick={()=>setView(!view)}>{view? "View less":"View All"}</button>
            </div>
        </div>
    </>
}