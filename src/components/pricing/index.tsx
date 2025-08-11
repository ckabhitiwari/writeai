import PlanArea from './PlanArea';
import PricingArea from './PricingArea';
import Breadcrumb from '@/common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FaqAreaHomeOne from '../Home/FaqAreaHomeOne';
import CtaAreaHomeOne from '../Home/CtaAreaHomeOne';

const Pricing = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Pricing" subtitle="Pricing" />
      <PricingArea />
      <PlanArea />
      <FaqAreaHomeOne />
      <CtaAreaHomeOne />
      <FooterOne />
    </>
  );
};

export default Pricing;