import './GetInTouch.css';
import { useNavigate } from 'react-router-dom';
import Reveal from './Utils/Reveal';

export default function GetInTouch() {
  const navigate = useNavigate();

  const handleEmailUsClick = () => {
    navigate('/contact', { state: { scrollToBottom: true } });
  };

  return (
    <section className="get-in-touch-section get-in-touch-bg">
      <Reveal>
        <div className="get-in-touch-content">
          <h1 className="get-in-touch-heading">Get In Touch</h1>
          <p className="get-in-touch-text">
            When it comes to commercial cleaning, Massachusetts businesses know
            MCC is the one to call. Let’s get started on ensuring your cleaning
            needs are being met.
          </p>
          <button onClick={handleEmailUsClick} className="btn">
            CONTACT US &nbsp; &rsaquo;
          </button>
        </div>
      </Reveal>
    </section>
  );
}
