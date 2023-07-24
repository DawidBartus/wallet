import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  @media (max-width: 1279px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 50px;
  }
`;

export default Section;
