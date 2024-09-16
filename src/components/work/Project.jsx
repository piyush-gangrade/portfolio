import React from "react";
import "./work.css";

export default function Project({projectName, projectImg, projectDes, projectLink}){
    return <>
        <div className="project-container">
            <div className="project-heading">{projectName}</div>
            <img src={projectImg} alt={projectName} className="project-img"/>
            <div className="project-des">{projectDes}</div>
            <div className="project-link">
                <a className="btn" href={projectLink} target="_blank">Code Visit</a>
            </div>
        </div>
    </>
}