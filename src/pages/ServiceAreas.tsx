import Reveal from "../components/Utils/Reveal";
import GetInTouch from "../components/GetInTouch";
import "./ServiceAreas.css";

export default function ServiceAreas() {
  return (
    <div>
      <Reveal>
        <section className="heading-section">
          <div className="heading-text">
            <h2>Service Areas</h2>
            <p>
              Discover MCC's reliable commercial cleaning services covering the
              Florence, MA and Sturbridge, MA regions. We are dedicated to
              delivering exceptional cleaning solutions to businesses in these
              vibrant communities.
            </p>
          </div>
        </section>
        <section className="intro">
          <div className="intro-container">
            <img
              className="intro-image MA-img"
              src="https://www.massachusetts-map.org/massachusetts-nc.gif"
              alt="worker working"
            />
            <div className="intro-copy-container">
              <h2 className="intro-heading">Detailed Service Coverage</h2>
              <p className="intro-text">
                Our commitment to excellence extends to every corner of
                Florence, MA and Sturbridge, MA, ensuring that businesses in
                these areas receive meticulous cleaning services tailored to
                their unique needs. From offices and retail spaces to medical
                facilities and industrial sites, MCC goes above and beyond to
                maintain pristine environments that enhance productivity and
                elevate customer satisfaction.
              </p>
            </div>
          </div>
          <div className="cities-container">
            <div className="row-cities">
              <ul>
                <li className="city">City Name</li>
                <li className="city">City Name</li>
                <li className="city">City Name City Name</li>
                <li className="city">City Name</li>
                <li className="city">City Name</li>
                <li className="city">City Name</li>
              </ul>
            </div>
            <div className="row-cities">
              <ul>
                <li className="city">City Name</li>
                <li className="city">City Name</li>
                <li className="city">City Name</li>
                <li className="city">City Name City Name</li>
                <li className="city">City Name</li>
                <li className="city">City Name</li>
              </ul>
            </div>
            <div className="row-cities">
              <ul>
                <li className="city">City Name</li>
                <li className="city">City Name</li>
                <li className="city">City Name City Name</li>
                <li className="city">City Name</li>
                <li className="city">City Name</li>
                <li className="city">City Name</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section-three">
          <div className="section-three-container">
            <h2 className="section-three-heading">
              Tailored Cleaning Solutions for Every Facility
            </h2>
            <p className="section-three-text">
              Contacting our commercial cleaning company grants you access to a comprehensive suite of services essential for maintaining your office in impeccable condition. As a dedicated janitorial and
              commercial cleaning service provider, we prioritize quality to
              alleviate your stress and streamline operations. Our tailored
              approach includes commercial cleaning, janitorial services,
              commercial carpet cleaning, and office cleaning. These services
              encompass a range of solutions from office cleaning to janitorial maintenance, ensuring every aspect of your commercial property shines with professionalism and cleanliness.
            </p>
          </div>
        </section>
      </Reveal>
      <GetInTouch />
    </div>
  );
}