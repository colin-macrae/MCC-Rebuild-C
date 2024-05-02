import Reveal from "../../components/Utils/Reveal";
// import { Link } from "react-router-dom";
import GetInTouch from "../../components/GetInTouch";
import "./ServicesPagesTemplate.css";

export default function ServicesPagesTemplate({
  pageHeading,
  pageHeadingText,
  image,
  introHeading,
  introText,
  sectionTwoHeading,
  sectionTwoText,
}) {
  return (
    <div>
      <section className="heading-section">
        <Reveal>
          <div className="heading-text">
            <h2>{pageHeading}</h2>
            <p>{pageHeadingText}</p>
          </div>
        </Reveal>
      </section>
      <section className="intro">
        <div className="intro-container">
          <img className="intro-image" src={image} alt="worker working" />
          <div className="intro-copy-container">
            <h2 className="intro-heading">{introHeading}</h2>
            <p className="intro-text">{introText}</p>
          </div>
        </div>
      </section>
      <section className="section-three">
        <div className="section-three-container">
          <h2 className="section-three-heading">{sectionTwoHeading}</h2>
          <p className="section-three-text">{sectionTwoText}</p>
        </div>
      </section>
      <GetInTouch />
    </div>
  );
}
