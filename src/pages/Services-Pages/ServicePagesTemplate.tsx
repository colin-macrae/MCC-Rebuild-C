import Reveal from "../../components/Utils/Reveal";
import GetInTouch from "../../components/GetInTouch";
import "./ServicesPagesTemplate.css";

interface ServicesPagesTemplateProps {
  pageHeading: string;
  pageHeadingText: string;
  image: string;
  introHeading: string;
  introText: string;
  sectionTwoHeading: string;
  sectionTwoText: string;
}

export default function ServicesPagesTemplate(
  props: ServicesPagesTemplateProps
) {
  const {
    pageHeading,
    pageHeadingText,
    image,
    introHeading,
    introText,
    sectionTwoHeading,
    sectionTwoText,
  } = props;

  return (
    <div>
      <Reveal>
        <section className="heading-section">
          <div className="heading-text max-w-[1400px]">
            <h2>{pageHeading}</h2>
            <p>{pageHeadingText}</p>
          </div>
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
      </Reveal>
      <GetInTouch />
    </div>
  );
}
