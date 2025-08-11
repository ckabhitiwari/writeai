import FaqAreaHomeOne from "./FaqAreaHomeOne";
import CtaAreaHomeOne from "./CtaAreaHomeOne";
import HeroAreaHomeOne from "./HeroAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import BrandsAreaHomeOne from "./BrandsAreaHomeOne";
import ServiceAreaHomeOne from "./ServiceAreaHomeOne";
import FeaturesAreaHomeOne from "./FeaturesAreaHomeOne";
import TestimonialAreaHomeOne from "./TestimonialAreaHomeOne";

 

const HomeOne = () => {
  return (
    <>
      <HeaderOne /> 
      <HeroAreaHomeOne />
      <BrandsAreaHomeOne />
      <FeaturesAreaHomeOne />
      <ServiceAreaHomeOne />
      <TestimonialAreaHomeOne />
      <FaqAreaHomeOne />
      <CtaAreaHomeOne />
      <FooterOne />
    </>
  );
};

export default HomeOne;