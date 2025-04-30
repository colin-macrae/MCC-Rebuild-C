import coloredLogo from "../assets/Mass_Commercial_Cleaning_FINAL-1cREV-SCREEN.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="p-5 pt-10 px-12 bg-[#005067] text-[#ffffff] w-full flex flex-col justify-center lg:flex-row">
        <div className="mb-10 lg:w-[1200px] flex flex-col justify-center lg:flex-row">
          <div className="lg:w-52 w-full flex justify-center lg:block">
            <img src={coloredLogo} />
          </div>

          <div className="lg:w-1/4 flex-col w-full mt-6 lg:m-auto lg:pl-14">
            <div className="text-sm font-bold mb-4 flex justify-center mt-4 lg:mt-auto lg:justify-start">
              CONTACT US
            </div>
            <div className="text-sm">
              <p className="flex justify-center footer-txt lg:justify-start">
                660 Main Street{' '}
              </p>
              <p className="flex justify-center pb-3 lg:justify-start">
                Sturbridge, MA 01566
              </p>
              <p className="flex justify-center lg:justify-start">
                140 Pine Street
              </p>
              <p className="flex justify-center pb-3 lg:justify-start">
                Florence, MA 01062
              </p>
              <p className="flex justify-center lg:justify-start">
                (413) 586-4696
              </p>
              <p className="flex justify-center lg:justify-start">
                Info@macommclean.com
              </p>
            </div>
          </div>

          <div className="lg:w-1/5 flex-col w-full ">
            <div className="text-sm flex justify-center  mt-6 lg:mt-auto pb-3 lg:justify-start font-bold">
              HOURS
            </div>
            <div>
              <p className="font-bold flex text-sm justify-center lg:justify-start">
                Mon - Fri
              </p>
              <p className="text-sm flex justify-center pb-3 lg:justify-start">
                8 am - 5pm
              </p>
              <p className="font-bold text-sm flex justify-center lg:justify-start">
                Sat & Sun
              </p>
              <p className="text-sm flex justify-center lg:justify-start">
                Closed
              </p>
            </div>
          </div>

          <div className="lg:w-1/5 flex-col w-full">
            <div className="mt-8 lg:mt-auto">
              <Link to="/">
                <p className="flex justify-center lg:justify-start text-sm font-bold pb-2 hover:text-[#F48700]">
                  HOME
                </p>
              </Link>
              <Link to="/about">
                <p className="flex justify-center text-sm lg:justify-start font-bold pb-2 hover:text-[#F48700]">
                  ABOUT
                </p>
              </Link>
              <Link to="/employment">
                <p className="flex justify-center text-sm lg:justify-start  font-bold pb-2 hover:text-[#F48700]">
                  EMPLOYMENT
                </p>
              </Link>
              <Link to="/contact">
                <p className="flex justify-center text-sm lg:justify-start  font-bold pb-2 hover:text-[#F48700]">
                  CONTACT
                </p>
              </Link>
              <Link to="/privacy-policy">
                <p className="flex justify-center text-sm lg:justify-start  font-bold hover:text-[#F48700]">
                  PRIVACY POLICY
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
