import React from 'react';
import { Layout } from '../components/foundation';
import { CodeDemoSection, HeroSection } from '../components/home';

export default () => {
  return (
    <Layout>
      <HeroSection />
      <CodeDemoSection />
    </Layout>
  );
};
