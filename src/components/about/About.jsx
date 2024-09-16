import React, { useState } from "react";
import "./about.css"
import resume from "../../assets/Piyush.pdf"

export default function About() {
    const [readMore, setReadMore] = useState(false)

    const handleReadClick = () => {
        console.log("clicks")
        setReadMore(!readMore);
    }
    return <>
        <div id="about">
            <div className="heading">
                <span className="heading-text"><span className="purple">#</span>about us</span>
            </div>
            <div className="about-container">
                <div className="about-text">
                    <span>I'm a web developer with a strong understanding of front-end and back-end technologies. I build responsive, functional websites using HTML, CSS, JavaScript, and React, while leveraging Node.js, Express.js, and MongoDB for back-end solutions.{readMore?"":"........"}</span>
                    <div className={`hidden-text ${readMore?"expended":""}`}>
                        <span>I love solving complex problems and enjoy the challenge of debugging.</span>
                        <span className="about-para">With a interest in full-stack development, I focus on creating smooth user experiences and reliable server-side functionality. I'm always open to new opportunities to collaborate, grow, and contribute my skills. Let's connect and create something great together!</span>
                    </div>
                </div>

                <div className={`hidden-btn ${readMore?"expended":""}`}>
                    <a className="btn resume-btn" href={resume} download>Resume</a>
                    <a className="btn" href="#contact">Contact</a>
                </div>

                <div className="read-btn-cnt">
                    <button className="btn" onClick={handleReadClick}>{readMore ? "Read less" : "Read more"}</button>
                </div>
            </div>
        </div>
    </>
}