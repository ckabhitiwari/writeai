
import Breadcrumb from '@/common/Breadcrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import CtaAreaHomeOne from '../Home/CtaAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import ContactusArea from './ContactusArea';
import ExploreArea from './ExploreArea';

const Contactus = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Contact Us" subtitle="Contact Us" />
      <ContactusArea />
      <ExploreArea />
      <CtaAreaHomeOne />
      <FooterOne />
    </>
  );
};

export default Contactus;