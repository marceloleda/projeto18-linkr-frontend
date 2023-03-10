import styled from "styled-components";

const Form = styled.form`
  width: 35%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5% 8% 5%;
  gap: 13px;

  @media screen and (max-width: 375px) {
    width: 100%;
    display: flex;
    justify-content: center;

  }
`;

export default Form;