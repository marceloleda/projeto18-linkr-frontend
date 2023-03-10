import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 65px;
  padding: 10px;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  
  font-size: 27px;
  line-height: 40px;
  font-style: bold;
  font-family: 'Oswald', sans-serif;

  &::placeholder{
    color: #9F9F9F;
    fill: solid;
  }
`;

export default Input;