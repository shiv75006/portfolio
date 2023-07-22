import React from "react";
import "./management.css";
import Navbar from "../navbar/Navbar";
import Footer from '../footer/Footer'
import { Link } from "react-router-dom";
const Management = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mcards">
        <div className="mcard">
          <h1>Graphic Design Team Lead | TEDxGraphicEraUniversityWomen</h1>
          <h4 className="timeperiod">October 2022 - November 2022</h4>
          <p className="managementpara">
            As the Graphic Design Team Lead for TEDx Graphic Era University
            Women, I spearheaded a talented team of designers to craft visually
            captivating and impactful artwork for our inspiring events.
            . Through effective
            collaboration with speakers and the organizing committee, our
            designs enriched the TEDx experience, leaving a lasting impression
            on attendees and online audiences worldwide. As a leader, I fostered
            creativity, teamwork, and attention to detail, ensuring our graphics
            reflected the essence of our mission - "Ideas worth spreading.{" "}
          </p>

          <p className="Linkedinlink">
            <span className="linktext">Linkedin Link :</span>
            <Link
              className="Link"
              to="https://www.linkedin.com/in/shivyanshu-saini/"
            >
              https://www.linkedin.com/in/shivyanshu-saini/
            </Link>
          </p>
        </div>

        <div className="mcard">
          <h1>Webmaster | GEU ACM Student Chapter</h1>
          <h4 className="timeperiod">October 2022 - July 2023</h4>
          <p className="managementpara">
            As the Webmaster for Graphic Era University ACM Student Chapter,I
            played a pivotal role in enhancing the organization's digital
            presence and engagement, led the development and maintenance of a
            dynamic website that showcases events, projects, and resources,
            offering a seamless user experience to students and enthusiasts.
            Collaborating with the tech-savvy team, I implemented a cutting-edge
            web technologies and optimize the website for responsiveness and
            performance.{" "}
          </p>

          <p className="Linkedinlink2">
            <span className="linktext">Linkedin Link :</span>
            <Link
              className="Link"
              to="https://www.linkedin.com/in/shivyanshu-saini/"
            >
              https://www.linkedin.com/in/shivyanshu-saini/
            </Link>{" "}
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Management;
