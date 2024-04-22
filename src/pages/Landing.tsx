import GetInTouch from "../components/GetInTouch";
import "./Landing.css";
import "./About.css"

export default function Landing() {
  return (
    <div className="background-image">
      <section className="about-heading-section">
        <div className="about-heading-text">
          <h2>Professional Commercial Cleaning</h2>
          <p>
            Mass Commercial Cleaning is a technology-enabled janitorial partner
            serving 170 facilities in over 50 cities across Massachusetts and
            Connecticut. Leading the way for reliable cleaning services, we’re
            the corporate cleaning company in the New England area.
          </p>
          <button className="btn">CONTACT US &rsaquo;</button>
        </div>
      </section>
      <GetInTouch />
    </div>
  );
}
