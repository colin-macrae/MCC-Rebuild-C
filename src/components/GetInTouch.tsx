import "./GetInTouch.css";
import { Link } from "react-router-dom";
import Reveal from "./Utils/Reveal";

export default function GetInTouch() {
  return (
    <section className="get-in-touch-section get-in-touch-bg">
      <Reveal>
        <div className="get-in-touch-content">
          <h2 className="get-in-touch-heading">Get In Touch</h2>
          <p className="get-in-touch-text">
            When it comes to commercial cleaning, Massachusetts businesses know
            MCC is the one to call. Let’s get started on ensuring your cleaning
            needs are being met.
          </p>
          <Link to="/contact">
            <button className="btn">CONTACT US &nbsp; &rsaquo;</button>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
