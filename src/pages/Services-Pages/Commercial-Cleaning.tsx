import ServicesPagesTemplate from "./ServicePagesTemplate"

export default function CommericalCleaning () {

const pageHeading = "Commercial Cleaning Services";
const pageHeadingText =
  "Elevate your commercial spaces with MCC's unparalleled expertise in cleaning services, delivering pristine environments that exceed expectations.";
const image =
  "https://media.licdn.com/dms/image/D4E12AQEbk2ugA2rOHw/article-inline_image-shrink_1500_2232/0/1697025096211?e=1718841600&v=beta&t=enjEv6pHff5E5bUfucZZD111yiOYeMxIqXUnoSmeh_Y";
const introHeading = "Our Methodology: The MCC Difference";
const introText =
  "At MCC, we believe in delivering more than just surface-level cleanliness. Our meticulous methodology involves a comprehensive approach that begins with understanding your unique cleaning needs. From there, our highly trained professionals employ state-of-the-art equipment and eco-friendly cleaning products to ensure every nook and cranny is thoroughly sanitized. Whether it's office buildings, retail spaces, or industrial facilities, our tailored solutions guarantee a pristine environment that not only meets industry standards but also reflects our unwavering commitment to excellence.";
const sectionTwoHeading = "Our Commitment to Quality Assurance";
const sectionTwoText =
  "At MCC, our dedication to excellence extends beyond just one-time cleaning services. We are committed to maintaining the highest standards of cleanliness consistently. Through rigorous quality assurance measures and regular inspections, we ensure that every aspect of your commercial space is impeccably maintained. Our proactive approach enables us to identify and address any potential issues before they become problems, guaranteeing a consistently hygienic environment for your employees and customers alike. With MCC, you can trust that your facility will always showcase the pinnacle of cleanliness and professionalism.";


    return (
      <ServicesPagesTemplate
        pageHeading={pageHeading}
        pageHeadingText={pageHeadingText}
        image={image}
        introHeading={introHeading}
        introText={introText}
        sectionTwoHeading={sectionTwoHeading}
        sectionTwoText={sectionTwoText}
      />
    );
}