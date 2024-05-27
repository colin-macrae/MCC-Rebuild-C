
import ServicesPagesTemplate from "./ServicePagesTemplate";


export default function CarpetCleaning () {
  const pageHeading = "Commercial Carpet Cleaning";
  const pageHeadingText =
    "MCC Carpet Cleaners excels in restoring carpets to pristine condition through advanced cleaning techniques and unmatched attention to detail, ensuring a fresh and inviting ambiance for every space.";
  const image =
    "src/assets/carpet-cleaning.png";
  const introHeading = "Our Proven Carpet Cleaning Process";
  const introText =
    "We employ a meticulously crafted cleaning process that guarantees exceptional results. Beginning with a thorough inspection of your carpets, we identify specific areas of concern and tailor our approach accordingly. Our state-of-the-art equipment and eco-friendly cleaning solutions penetrate deep into the fibers, effectively removing embedded dirt, stains, and allergens. With our skilled technicians at the helm, you can trust that your carpets will receive the care and attention they deserve, leaving them revitalized and rejuvenated.";
  const sectionTwoHeading = "Unmatched Expertise and Dedication";
  const sectionTwoText =
    "Our commitment to excellence extends beyond just one aspect of our service—it's ingrained in every step of our process. With years of experience in the industry, our team possesses unparalleled expertise in handling a diverse range of carpet cleaning challenges. From stubborn stains to deep-seated grime, we've seen it all and have the skills and knowledge to tackle even the toughest cleaning tasks. We take pride in our dedication to delivering consistently exceptional results, ensuring that your carpets not only look immaculate but also maintain their integrity and longevity for years to come.";

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