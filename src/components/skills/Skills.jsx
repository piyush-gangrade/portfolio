import React from "react";
import "./skills.css";

export default function Skills(){
    return <>
        <div id="skills">
            <div className="heading">
                <span className="heading-text" ><span className="purple">#</span>skills</span>
            </div>
            <div className="skill-container">
                <span className="level level-1"></span>
                <div className="skill skill-1">HTML</div>
                <div className="skill skill-2">CSS</div>
                <span className="level level-2"></span>
                <div className="skill skill-3">Javascript</div>
                <span className="level level-3"></span>
                <div className="skill skill-4">React.js</div>
                <div className="skill skill-5">node.js</div>
                <span className="level level-4"></span>
                <div className="skill skill-6">express.js</div>
                <div className="skill skill-7">MongoDB</div>
            </div>
        </div>
    </>
}