
import "./ServiceAreas.css";
import { Link } from "react-router-dom";

export default  function NotFound() {  
  return (
    <div>
        <section className="heading-section">
          <div className="heading-text max-w-[1400px]">
            <h2>404: Page Not Found</h2>
            <p>
              Click <Link className="nav-item text-xl text-blue-400 " to="/about">here</Link> to navigate to the home page or choose another destination above via the nav links. 
            </p>            
          </div>
          
        </section>
        <p className="h-[90vh]"></p>
    </div>
  );
}