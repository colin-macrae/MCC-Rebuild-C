import ServicesPagesTemplate from "./ServicePagesTemplate";

export default function JanitorialServices() {
  const pageHeading = "Janitorial Services";
  const pageHeadingText =
    "MCC excels in janitorial services through meticulous attention to detail and a commitment to exceeding cleanliness standards. Our company's reputation for excellence is built on reliable, efficient, and thorough cleaning solutions tailored to meet every client's needs.";
  const image =
    "src/assets/111-Thatcher-Day-1-roback-3-background.jpg";
  const introHeading = "Unparalleled Janitorial Excellence";
  const introText =
    "At MCC, our dedication to delivering unmatched janitorial services is evident in every aspect of our operations. Our highly-trained cleaning staff utilizes cutting-edge techniques and top-quality equipment to ensure pristine cleanliness in every corner of your space. From regular maintenance to specialized deep cleaning, we offer comprehensive solutions tailored to your specific requirements. With a focus on environmental sustainability, we employ eco-friendly practices and products to minimize our ecological footprint while maximizing the health and safety of your environment. Trust MCC for superior janitorial services that go above and beyond your expectations, ensuring a spotless and welcoming atmosphere for your clientele and employees alike.";
  const sectionTwoHeading = "Consistent Excellence, Every Visit";
  const sectionTwoText =
    "Paragraph: At MCC, our commitment to excellence extends beyond just one-time cleanings; it's a promise we uphold with every visit. We understand that maintaining a clean and sanitary environment is essential for your business's success, which is why our team goes above and beyond to ensure consistent quality in every cleaning task. Whether it's daily, weekly, or monthly janitorial services, you can rely on MCC to deliver reliable and thorough cleaning solutions tailored to your schedule and preferences. With meticulous attention to detail and a passion for perfection, we strive to exceed your expectations with each and every visit, leaving your space immaculate and inviting for all who enter. Trust MCC for unwavering excellence in janitorial services, because your satisfaction is our top priority.";

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
