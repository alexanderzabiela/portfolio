import React, { Component } from 'react';
import styled from '@emotion/styled';

const Container = styled('div')`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Section = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    width: 50%;
  }

  &:nth-of-type(1) {
    margin-right: 20px;
  }
`;

const TextBox = styled('input')`
  margin-bottom: 20px;
  height: 40px;
  padding: 10px;
`;

const TextArea = styled('textarea')`
  height: 100px;
  padding: 10px;

  @media only screen and (min-width: 768px) {
    height: 89%;
  }
`;

class ContactForm extends Component {
  render() {
    return (
      <Container>
        <Section>
          <TextBox placeholder="Your Name" type="text" />
          <TextBox placeholder="Your Email" type="text" />
          <TextBox placeholder="Subject" type="text" />
        </Section>
        <Section>
          <TextArea placeholder="Your Message" />
        </Section>
      </Container>
    );
  }
}

export default ContactForm;
