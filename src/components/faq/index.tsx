

import Breadcrumb from '@/common/Breadcrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import CtaAreaHomeOne from '../Home/CtaAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import FaqArea from './FaqArea';

const Faq = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Faqs" subtitle="Faqs" />
      <FaqArea />
      <CtaAreaHomeOne />
      <FooterOne />
    </>
  );
};

export default Faq;