import Footer from 'components/organisms/Footer/Footer';
import Header from 'components/organisms/Header/Header';
import React from 'react';

interface BasicTemplatePops {
  children: React.ReactNode;
}

const BasicTemplate: React.FC<BasicTemplatePops> = ({children}: BasicTemplatePops) => (
  <div data-testid="template-wrapper">
    <Header isUnderline />
    <div className="esc_container">{children}</div>
    <Footer />
  </div>
);

export default BasicTemplate;
