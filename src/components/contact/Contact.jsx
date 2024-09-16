import React from "react";
import "./contact.css";

export default function Contact() {
    return <>
        <div id="contact">
            <div className="heading">
                <span className="heading-text" ><span className="purple">#</span>contact me</span>
            </div>
            <div className="contact-container">
                <div className="contact-text">
                    I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
                </div>
                <div className="contact-box">
                    <div >Message me here</div>
                    <a className="contact-link linkedin" href="https://www.linkedin.com/in/piyush-gangrade-204aa5248" target="_blank">Piyush Gangrade</a>
                    <a className="contact-link mail" href="mailto:piyushgrade750@gmail.com">piyushgangrade750@gmail.com</a>
                </div>
            </div>
        </div>
    </>
}