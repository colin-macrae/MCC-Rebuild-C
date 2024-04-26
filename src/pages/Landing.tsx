import GetInTouch from "../components/GetInTouch";
import "./Landing.css";
import "./About.css";

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
      <section className="attribute-icons-section">
        <div className="content-container">
          <div className="icon-container">
            <img
              src="https://masscocleaning.wpengine.com/wp-content/uploads/Group-48@2x.jpg"
              alt=""
              className="three-icons"
            />
            <h3 className="icons-text">Affordable & Consistent</h3>
          </div>
          <div className="icon-container">
            <img
              src="https://masscocleaning.wpengine.com/wp-content/uploads/Group-46@2x.jpg"
              alt=""
              className="three-icons"
            />
            <h3 className="icons-text">Employee-Owned</h3>
          </div>
          <div className="icon-container">
            <img
              src="https://masscocleaning.wpengine.com/wp-content/uploads/Group-44@2x.jpg"
              alt=""
              className="three-icons"
            />
            <h3 className="icons-text">Management Oversight</h3>
          </div>
        </div>
      </section>

      <GetInTouch />
    </div>
  );
}
