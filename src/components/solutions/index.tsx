
import Breadcrumb from '@/common/Breadcrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import ServiceAreaHomeOne from '../Home/ServiceAreaHomeOne';
import CtaAreaHomeOne from '../Home/CtaAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import PlagiarismArea from './PlagiarismArea';
import FeaturesArea from './FeaturesArea';
import ContentArea from './ContentArea';
import CounterArea from './CounterArea';

const Solutions = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Solutions" subtitle="Solutions" />
      <PlagiarismArea />
      <FeaturesArea />
      <ContentArea />
      <CounterArea />

      <ServiceAreaHomeOne />
      <CtaAreaHomeOne />
      <FooterOne /> 
    </>
  );
};

export default Solutions;