import Reveal from '../components/Utils/Reveal';
import GetInTouch from '../components/GetInTouch';
import './ServiceAreas.css';

export default function ServiceAreas() {
  return (
    <div>
      <section className="heading-section">
        <div className="heading-text max-w-[1400px]">
          <Reveal>
            <h2>Service Areas</h2>
            <p>
              Discover MCC's reliable commercial cleaning services covering the
              Florence, MA and Sturbridge, MA regions. We are dedicated to
              delivering exceptional cleaning solutions to businesses in these
              vibrant communities.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="intro">
        <div className="intro-container">
          <Reveal>
            <img
              className="intro-image MA-img"
              src="/service-areas-map.gif"
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
          </Reveal>
        </div>

        <Reveal>
          <div className="cities-container">
            <div className="row-cities">
              <ul>
                <li className="city text-xl">Hampshire</li>
                <li className="city list-disc ml-4">Amherst</li>
                <li className="city list-disc ml-4">Belchertown</li>
                <li className="city list-disc ml-4">Easthapton</li>
                <li className="city list-disc ml-4">Hadley</li>
                <li className="city list-disc ml-4">Northampton</li>
                <li className="city list-disc ml-4">South Hadley</li>
                <li className="city list-disc ml-4">Westhampton</li>
                <li className="city list-disc ml-4">Williamsburg</li>
              </ul>
            </div>
            <div className="row-cities">
              <ul>
                <li className="city text-xl">Hampden</li>
                <li className="city list-disc ml-4">Agawam</li>
                <li className="city list-disc ml-4">Chicopee</li>
                <li className="city list-disc ml-4">Holyoke</li>
                <li className="city list-disc ml-4">Longmeadow</li>
                <li className="city list-disc ml-4">Monson</li>
                <li className="city list-disc ml-4">Palmer</li>
                <li className="city list-disc ml-4">Russell</li>
                <li className="city list-disc ml-4">Springfield</li>
                <li className="city list-disc ml-4">West Springfield</li>
                <li className="city list-disc ml-4">Wilbraham</li>
              </ul>
            </div>
            <div className="row-cities">
              <ul>
                <li className="city text-xl">Worcester</li>
                <li className="city list-disc ml-4">Auburn</li>
                <li className="city list-disc ml-4">Barre</li>
                <li className="city list-disc ml-4">Brookfield</li>
                <li className="city list-disc ml-4">Charlton</li>
                <li className="city list-disc ml-4">Fitchburg</li>
                <li className="city list-disc ml-4">Leominister</li>
                <li className="city list-disc ml-4">Northborough</li>
                <li className="city list-disc ml-4">Spencer</li>
                <li className="city list-disc ml-4">Southbridge</li>
                <li className="city list-disc ml-4">Sturbridge</li>
                <li className="city list-disc ml-4">Westborough</li>
                <li className="city list-disc ml-4">Worcester</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="section-three">
        <div className="section-three-container">
          <Reveal>
            <h2 className="section-three-heading">
              Tailored Cleaning Solutions for Every Facility
            </h2>
            <p className="section-three-text">
              Contacting our commercial cleaning company grants you access to a
              comprehensive suite of services essential for maintaining your
              office in impeccable condition. As a dedicated janitorial and
              commercial cleaning service provider, we prioritize quality to
              alleviate your stress and streamline operations. Our tailored
              approach includes commercial cleaning, janitorial services,
              commercial carpet cleaning, and office cleaning. These services
              encompass a range of solutions from office cleaning to janitorial
              maintenance, ensuring every aspect of your commercial property
              shines with professionalism and cleanliness.
            </p>
          </Reveal>
        </div>
      </section>
      <GetInTouch />
    </div>
  );
}
