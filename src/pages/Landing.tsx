import GetInTouch from "../components/GetInTouch";
import "./Landing.css";
import "./About.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Reveal from "../components/Utils/Reveal";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Landing() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigate = useNavigate();

  const handleEmailUsClick = () => {
    navigate('/contact', { state: { scrollToBottom: true } });
  };

  const images = [
    "/carousel-1.jpeg",
    "/carousel-2.jpeg",
    "/carousel-3.jpeg",
    "/carousel-4.jpeg",
    "/carousel-5.jpeg",
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
        <Reveal>
          <div className="about-heading-text">
            <h2>Professional Commercial Cleaning</h2>
            <p>
              Mass Commercial Cleaning is a technology-enabled janitorial
              partner serving 170 facilities in over 50 cities across
              Massachusetts and Connecticut. Leading the way for reliable
              cleaning services, we’re the corporate cleaning company in the New
              England area.
            </p>
            <button onClick={handleEmailUsClick} className="btn">
              CONTACT US &rsaquo;
            </button>
          </div>
        </Reveal>
      </section>
      <section className="attribute-icons-section">
        <Reveal>
          <div className="content-container">
            <div className="icon-container">
              <img src="/icon-house.jpg" alt="" className="three-icons" />
              <h3 className="icons-text">Affordable & Consistent</h3>
            </div>
            <div className="icon-container">
              <img src="/icon-buildings.jpg" alt="" className="three-icons" />
              <h3 className="icons-text">Employee-Owned</h3>
            </div>
            <div className="icon-container">
              <img src="/icon-tools.jpg" alt="" className="three-icons" />
              <h3 className="icons-text">Management Oversight</h3>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="image-carousel-section">
        <Reveal>
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
                        ? 'active preview-img'
                        : 'preview-img'
                    }
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
              <Link to="/about">
                <button className="btn btn-landing">
                  ABOUT MCC &nbsp; &rsaquo;
                </button>
              </Link>
            </div>
            <div>
              <div className="list-container">
                <h3 className="bullet-list-heading">Environmental Cleaning</h3>
                <ul className="bullet-list">
                  <li>Utilize Environmentally Preferable Cleaning Products</li>
                  <li>
                    Equipment & Practices that Prevent Cross-Contamination
                  </li>
                  <li>Improve Indoor Air Quality</li>
                  <li>
                    Ensure a Safe & Clean Work Environment for Employees,
                    Clients, & Visitors
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
        </Reveal>
      </section>
      <section className="mcc-advantage-section">
        <Reveal>
          <div className="mcc-advantage-first-section">
            <h2 className="mcc-advantage-subtitle">The MCC Advantage</h2>

            <p className="mcc-advantage-heading-text">
              Serving clients from small offices to large industrial
              manufacturers and government contractors, MCC is a commercial
              cleaning contractor with trained and managed cleaners offering a
              higher level of affordability, consistency, and reliable service
              than any other cleaning company in Massachusetts. If you’re on a
              budget, we’ll propose a price that works for everyone. Whatever
              your cleaning needs, MCC is the solution.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="advantages-row">
            <div className="advantage-single">
              <img
                src="/mcc-advantage-1.jpeg"
                alt="mass comm team posing"
                className="advantages-img"
              />
              <h3 className="advantage-name">Affordable & Consistent</h3>
              <p className="advantage-description">
                We leave spaces looking and feeling clean, with attention to
                detail. No corner, surface, or room is left untouched thanks to
                our dedicated team.
              </p>
            </div>
            <div className="advantage-single">
              <img
                src="/mcc-advantage-2.jpeg"
                alt="mass comm team posing"
                className="advantages-img"
              />
              <h3 className="advantage-name">Responsive & Reliable</h3>
              <p className="advantage-description">
                When it comes to cleaning companies in Massachusetts, you won’t
                find one you can trust more than MCC. We always ensure we’re
                meeting your expectations to create a clean and safe
                environment.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="advantages-row">
            <div className="advantage-single">
              <img
                src="/mcc-advantage-3.jpeg"
                alt="mass comm team posing"
                className="advantages-img"
              />
              <h3 className="advantage-name">Employee-Owned</h3>
              <p className="advantage-description">
                We founded our business in 1989 and became employee-owned and
                operated in 2021, resulting in passionate and dedicated
                employees who each participate in profit distribution. This
                means you’re working with a team committed to providing
                exceptional services, no matter who at MCC you speak to.
              </p>
            </div>
            <div className="advantage-single">
              <img
                src="/mcc-advantage-4.jpeg"
                alt="mass comm team posing"
                className="advantages-img"
              />
              <h3 className="advantage-name">Technology-Supported</h3>
              <p className="advantage-description">
                Our mobile app can be used to communicate with our cleaners in
                their native language. Plus, our digital inspections and
                cleaning checklists ensure we’re always going above and beyond.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="testimonial-section testimonial-bg">
        <Reveal>
          <div className="testimonial-content">
            <p className="testimonial-text">
              I am a Supervisor of Equipment and Facilities for a global medical
              device manufacturer, Karl Storz. Being in business with MCC makes
              my work life less stressful and gives our employees a spotless and
              sanitary facility that we are quite proud of. Mass Commercial
              Cleaning is responsive, reliable, and thorough. With the labor
              market as tight as it is having Bill Hickman and MCC on the team
              allows Advanced Machining the ability to grow the business by
              allowing us to put more time and focus into equipment reliability
              and building systems. #highlyrecommended #teamwork
            </p>
            <p className="testimonial-text"> - Chris</p>
          </div>
        </Reveal>
      </section>
      <section className="cost-effective-section">
        <Reveal>
          <div className="cost-effective-container max-w-[1600px]">
            <div className="cost-effective-heading">
              <h2>Cost Effective Cleaning</h2>
            </div>
            <div className="cost-effective-items">
              <div className="cost-effective-item">
                <IoIosCheckmarkCircleOutline className="check-icon" />
                <h3 className="item-heading">Supplies & Equipment</h3>
                <p className="item-text">
                  We invest in the right equipment and supplies to ensure our
                  cleaners have the tools to get the job done well.
                </p>
              </div>
              <div className="cost-effective-item">
                <IoIosCheckmarkCircleOutline className="check-icon" />
                <h3 className="item-heading">Office, Industrial, School</h3>
                <p className="item-text">
                  No matter the environment, our trusted team is equipped with
                  the right tools and knowledge to ensure a superior clean.
                </p>
              </div>
              <div className="cost-effective-item">
                <IoIosCheckmarkCircleOutline className="check-icon" />
                <h3 className="item-heading">Professionalism</h3>
                <p className="item-text">
                  Our uniformed employee-owners care about the work they do and
                  how they do it, remaining courteous and respectful with every
                  client interaction.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="map-section bg-white">
        <div className="map-scn-container m-auto max-w-[2000px]">
          <div className="find-us">Where To Find Us</div>
          <Reveal>
            <MapContainer
              center={[42.240176, -72.370448]}
              zoom={9}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[42.113839, -72.083894]}>
                <Popup>
                  MCC <br />
                  660 Main Street <br />
                  Sturbridge, MA 01566
                </Popup>
              </Marker>
              <Marker position={[42.330088, -72.693499]}>
                <Popup>
                  MCC <br />
                  140 Pine Street
                  <br />
                  Florence, MA 01062
                </Popup>
              </Marker>
            </MapContainer>
          </Reveal>
        </div>
      </section>
      <GetInTouch />
    </div>
  );
}
