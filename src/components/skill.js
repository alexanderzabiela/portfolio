import styled from '@emotion/styled';

const Skill = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
  span,
  p {
    width: 200px;
    font-size: 18px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  span {
    margin-bottom: 16px;
    font-weight: 500;
  }
  p {
    font-size: 13px;
    width: 240px;
    padding-left: 12px;
    padding-right: 12px;
  }

  @media only screen and (min-width: 768px) {
    width: 33%;
  }
`;

export default Skill;
