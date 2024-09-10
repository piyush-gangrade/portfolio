import React from "react";
import "./home.css";
import profilePic from "../../assets/piyush.png";
import dot from "../../assets/filled-circle.png";

export default function Home() {
    return <>
        <div id="home">
            <div className="home-text">
            A <span className="purple">web developer</span> interested in building interactive and functional website.
            </div>
            <div className="profile-container">
                <img src={profilePic} alt="profile picture"  className="profileImg"/>
                <div className="profile-name">
                    <img src={dot} />
                    <span>Piyush Gangrade</span>
                </div>
            </div>
        </div>
    </>
}