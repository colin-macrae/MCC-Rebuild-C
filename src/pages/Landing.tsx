import GetInTouch from "../components/GetInTouch";
import "./Landing.css";
import "./About.css";
import { useState, useEffect } from "react";

export default function Landing() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://masscocleaning.wpengine.com/wp-content/uploads/DSC_0015.jpg",
    "https://masscocleaning.wpengine.com/wp-content/uploads/DSC_0017-250x350.jpg",
    "https://masscocleaning.wpengine.com/wp-content/uploads/DSC_0057.jpg",
    "https://masscocleaning.wpengine.com/wp-content/uploads/church-pew-scaled.jpg",
    "https://masscocleaning.wpengine.com/wp-content/uploads/DSC_0112.jpg",
  ];

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

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
      <section className="image-carousel-section">
        <div className="carousel-sctn-content-container">
          <div className="slider slider-margin">
            <div className="slide-container slide-container-landing">
              <img
                src={images[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
                className="slide slide-landing"
              />
              <button className="prev" onClick={prevSlide}>
                &#10094;
              </button>
              <button className="next" onClick={nextSlide}>
                &#10095;
              </button>
            </div>
            <div className="preview-container">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Preview ${index + 1}`}
                  className={
                    index === currentImageIndex
                      ? "active preview-img"
                      : "preview-img"
                  }
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
            <button className="btn btn-landing">ABOUT MCC &nbsp; &rsaquo;</button>
          </div>
          <div>
            <div className="list-container">
              <h3 className="bullet-list-heading">Environmental Cleaning</h3>
              <ul className="bullet-list">
                <li>Utilize Environmentally Preferable Cleaning Products</li>
                <li>Equipment & Practices that Prevent Cross-Contamination</li>
                <li>Improve Indoor Air Quality</li>
                <li>
                  Ensure a Safe & Clean Work Environment for Employees, Clients,
                  & Visitors
                </li>
              </ul>
            </div>
            <div className="list-container">
              <h3 className="bullet-list-heading">Large Scale</h3>
              <ul className="bullet-list">
                <li>Carpet Cleaning & Extraction</li>
                <li>Restoration & Post-Construction Cleaning</li>
                <li>Window Washing & Maintenance</li>
                <li>Day Porter</li>
                <li>Floor Care</li>
              </ul>
            </div>
            <div className="list-container">
              <h3 className="bullet-list-heading">Industry Certified</h3>
              <ul className="bullet-list">
                <li>
                  Certified in Clean Room & IT Data Storage Room Federal
                  Standards
                </li>
                <li>Members of ISSA</li>
                <li>
                  Utilize the Cleaning Industry Management Standard (CIMS)
                </li>
                <li>FAC114-Compliant & Insured</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch />
    </div>
  );
}
