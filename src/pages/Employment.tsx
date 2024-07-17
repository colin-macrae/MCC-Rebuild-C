import './Employment.css';
import EmploymentForm from './EmploymentForm';
import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Utils/Reveal';

export default function Employment() {
  const navigate = useNavigate();
  const handleEmailUsClick = () => {
    navigate('/contact', { state: { scrollToBottom: true } });
  };

  return (
    <div className="background-image">
      <section className="about-heading-section">
        <Reveal>
          <div className="about-heading-text">
            <h2>Become An Employee Owner</h2>
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
      <section className="form-container">
        <Reveal>
          <EmploymentForm />
        </Reveal>
      </section>
    </div>
  );
}
