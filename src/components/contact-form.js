import React, { Component } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Button from './button';

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

  form {
    dispay: block;
    @media only screen and (min-width: 768px) {
      width: 100%;
      display: flex;
    }
  }
`;

const Section = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    width: 50%;
    height: 234px;
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
    height: 22.3vh;
  }
`;

class ContactForm extends Component {
  render() {
    return (
      <div>
        <Container>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <Section>
              <TextBox
                required
                id="name"
                name="name"
                placeholder="Your Name"
                type="text"
              />
              <TextBox
                required
                id="email"
                name="email"
                placeholder="Your Email"
                type="text"
              />
              <TextBox
                required
                id="subject"
                name="subject"
                placeholder="Subject"
                type="text"
              />
            </Section>
            <Section>
              <TextArea
                required
                id="message"
                name="message"
                placeholder="Your Message"
              />
              <Button
                color="black"
                border="1px solid black"
                marginLeft="auto"
                css={css`
                  margin-left: auto;
                  margin-top: 40px;
                `}
              >
                Send Message &nbsp;&nbsp;&nbsp;&rarr;
              </Button>
            </Section>
          </form>
        </Container>
      </div>
    );
  }
}

export default ContactForm;
