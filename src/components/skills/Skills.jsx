import React from "react";
import "./skills.css";

export default function Skills(){
    return <>
        <div id="skills">
            <div className="heading">
                <span className="heading-text" ><span className="purple">#</span>skills</span>
            </div>
            <div className="skill-container">
                <ol className="skill-list level-1">
                    <li className="skill skill-1">HTML</li>
                    <li className="skill skill-2">CSS</li>
                </ol>
                <ol className="skill-list level-2">
                    <li className="skill skill-3">Javascript</li>
                </ol>
                <ol className="skill-list level-3">
                    <li className="skill skill-4">React.js</li>
                    <li className="skill skill-5">node.js</li>
                </ol>
                <ol className="skill-list level-4">
                    <li className="skill skill-6">express.js</li>
                </ol>
                <ol className="skill-list level-5">
                    <li className="skill skill-7">MongoDB</li>
                </ol>
            </div>
        </div>
    </>
}