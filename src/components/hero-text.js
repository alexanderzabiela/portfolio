import styled from '@emotion/styled';

const HeroText = styled('div')`
  background-image: linear-gradient(to top, #a8a8a8dd, #a8a8a800);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 0;

  h1,
  span {
    color: white;
    font-size: 28px;
    font-weight: normal;
    max-width: 90vw;
  }

  span {
    color: #fed136;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;

export default HeroText;
