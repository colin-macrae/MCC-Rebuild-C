import ServicesPagesTemplate from "./ServicePagesTemplate";

export default function OfficeCleaning() {
  const pageHeading = "Office Cleaning";
  const pageHeadingText =
    "MCC Cleaning Services excels in office cleaning with meticulous attention to detail, ensuring pristine workspaces that inspire productivity and wellbeing. Our company's commitment to efficiency and hygiene sets us apart, delivering consistently impeccable results tailored to meet every client's needs.";
  const image =
    "https://media.licdn.com/dms/image/D4E12AQEbk2ugA2rOHw/article-inline_image-shrink_1500_2232/0/1697025096211?e=1718841600&v=beta&t=enjEv6pHff5E5bUfucZZD111yiOYeMxIqXUnoSmeh_Y";
  const introHeading = "Our Expert Office Cleaning Services";
  const introText =
    "We pride ourselves on offering comprehensive office cleaning solutions tailored to your specific requirements. Our highly trained and professional team utilizes industry-leading techniques and eco-friendly products to deliver unparalleled cleanliness and hygiene in your workspace. From daily maintenance to deep cleaning, we ensure every corner is spotless, promoting a healthier and more inviting environment for your employees and visitors. With our flexible scheduling and personalized approach, you can trust us to maintain the impeccable standards your office deserves, allowing you to focus on what matters most—your business.";
  const sectionTwoHeading = "Elevating Office Hygiene Standards";
  const sectionTwoText =
    "At MCC Cleaning Services, we continue to raise the bar in office hygiene standards, setting a benchmark for excellence in the industry. Our commitment to quality extends beyond surface cleanliness, encompassing thorough disinfection protocols to ensure a germ-free environment. With attention to high-touch areas and advanced sanitation techniques, we prioritize the health and safety of your workforce, reducing the risk of illness and absenteeism. Trust MCC Cleaning Services to uphold the highest standards of cleanliness, providing peace of mind and a positive impression for clients and employees alike.";

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
