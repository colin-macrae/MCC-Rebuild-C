import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Employment from "./pages/Employment";
import CarpetCleaning from "./pages/Services-Pages/Carpet-Cleaning";
import CommericalCleaning from "./pages/Services-Pages/Commercial-Cleaning";
import JanitorialServices from "./pages/Services-Pages/Janitorial-Services";
import OfficeCleaning from "./pages/Services-Pages/Office-Cleaning";
import Footer from "./components/Footer";
import ServiceAreas from "./pages/ServiceAreas";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
// import RevealOnScroll from "./components/Utils/RevealOnScroll";

export default function App() {
  return (
    <>
      {/* <RevealOnScroll /> */}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/Commercial-Cleaning" element={<CommericalCleaning />} />
          <Route path="/Carpet-Cleaning" element={<CarpetCleaning />} />
          <Route path="/Janitorial-Services" element={<JanitorialServices />} />
          <Route path="/Office-Cleaning" element={<OfficeCleaning />} />
          <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
