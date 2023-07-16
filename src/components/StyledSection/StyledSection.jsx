import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Section = (props) => {
  const { children } = props;
  return <StyledSection>{children}</StyledSection>;
};
export default Section;
