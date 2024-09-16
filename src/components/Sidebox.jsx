import React from "react";
import resumeImg from "../assets/document.svg";
import githud from "../assets/github.svg";
import discord from "../assets/Discord.svg";
import resume from "../assets/Piyush.pdf";

export default function Sidebox() {
    return <>
        <div className="side-box">
            <a href={resume} download><img src={resumeImg} alt="resume"/></a>
            <a href="https://github.com/piyush-gangrade" target="_blank"><img src={githud} alt="github"/></a>
            <a href="https://discordapp.com/users/1212004427666296964" target="_blank"><img src={discord} alt="discord"/></a>
        </div>
    </>
}