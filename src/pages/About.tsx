import './About.css';
import { useState, useEffect } from 'react';
import '../assets/111-Thatcher-Day-1-roback-11.jpg';
import '../assets/111-Thatcher-Day-1-roback-3.jpg';
import GetInTouch from '../components/GetInTouch.tsx';
import Reveal from '../components/Utils/Reveal.tsx';
import { useNavigate } from 'react-router-dom';

const images = [
  '/about-1.jpeg',
  '/about-2.jpeg',
  '/about-3.jpeg',
  '/about-4.jpeg',
];

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const navigate = useNavigate();

  const handleEmailUsClick = () => {
    navigate('/contact', { state: { scrollToBottom: true } });
  };

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
            <h2>A Team of Owners</h2>
            <p>
              What makes MCC stand out from other cleaning companies in
              Massachusetts is that we are employee-owned. When you do business
              with us, you are directly supporting our cleaners and community.
            </p>
            <button onClick={handleEmailUsClick} className="btn">
              CONTACT US &rsaquo;
            </button>
          </div>
        </Reveal>
      </section>
      <section className="about-caring-section">
        <Reveal>
          <div className="about-caring-text m-auto max-w-[1200px]">
            <h2>Caring About Every Clean</h2>
            <p>
              As employee-owners, each MCC team member is trained in providing a
              best-in-class cleaning service to every one of our many facilities
              in the New England area. This means from your initial call for a
              quote to each clean you have with us, every interaction is with an
              owner of the company.
            </p>
            <button
              className="btn"
              onClick={() => setShowPhoneNumber(!showPhoneNumber)}
            >
              {showPhoneNumber ? '(413) 568-4696' : 'CALL US NOW'}
            </button>
          </div>
        </Reveal>

        <Reveal>
          <div className="slider">
            <div className="slide-container">
              <img
                src={images[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
                className="slide"
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
                  className={index === currentImageIndex ? 'active' : ''}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className="about-caring-text m-auto max-w-[1200px]">
            <p className="history-and-about">
              Mass Commercial Cleaning, Inc. is an MA-based commercial cleaning
              company founded in 1989. Our company has grown from a two-person
              start-up to over one hundred employees. In 2021, MCC transitioned
              to employee ownership after the retirement of its founders. Today,
              we are an employee-owned company where all employees receive
              company shares and participate in profit distribution.
            </p>
            <p className="history-and-about">
              We’re dedicated to ensuring that from our supply managers to our
              quality control, we’re providing our employee-owners with the
              right tools and supplies to effectively do their job. Going so far
              as to utilize a janitorial cleaning time tracking and task
              tracking mobile application, we ease communication between MCC and
              clients to ensure you’re always aware of your cleaning status.
            </p>
            <p className="history-and-about">
              Our management team has a combined 100+ years in the cleaning
              industry. Having employees who have been with us for over two
              decades is a testament to the positive environment we create for
              both our employees and our clients.
            </p>
          </div>
        </Reveal>
        <div>
          <div className=" m-auto">
            <Reveal>
              <img
                src="/about-team-1.jpeg"
                alt="mass comm team posing"
                className="team-pic-single"
              />
            </Reveal>
          </div>
          <div className="pics-double-container">
            <Reveal>
              <img
                src="/about-team-2.jpeg"
                alt="mass comm team posing"
                className="team-pic-double"
              />
              <img
                src="/about-team-3.jpeg"
                alt="mass comm team posing"
                className="team-pic-double"
              />
            </Reveal>
          </div>
        </div>
      </section>
      <GetInTouch />
    </div>
  );
}
