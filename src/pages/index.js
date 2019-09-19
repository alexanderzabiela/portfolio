import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Section from '../components/section';
import SectionContainer from '../components/section-container';
import SectionTitle from '../components/section-title';
import Skills from '../components/skills';
import Projects from '../components/projects';
import ContactForm from '../components/contact-form';

export default () => {
  return (
    <>
      <Layout>
        <Hero />
        <Section id="skills">
          <SectionContainer>
            <SectionTitle color="#fed136">
              &lt;<span>what_I_do </span>/&gt;
              <p>Things I'm skilled and passionate about.</p>
            </SectionTitle>
            <Skills />
          </SectionContainer>
        </Section>
        <Section color="#333333">
          <SectionContainer>
            <SectionTitle
              color="#fed136"
              css={css`
                color: white;
              `}
            >
              &lt;<span>latest_projects </span>/&gt;
            </SectionTitle>
            <Projects />
          </SectionContainer>
        </Section>
        <Section color="#fed136" id="contact">
          <SectionContainer>
            <SectionTitle color="white">
              &lt;<span>contact_me </span>/&gt;
            </SectionTitle>
            <ContactForm />
          </SectionContainer>
        </Section>
      </Layout>
    </>
  );
};
