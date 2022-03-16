import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        My Name is <br />
        Konstantine
      </SectionTitle>
      <SectionText>
        I am a Junior at the University of Maryland studying Computer Science in and out of the classroom.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.google.com'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;