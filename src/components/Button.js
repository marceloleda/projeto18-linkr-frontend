import styled from "styled-components";
import { blue, white } from "../constants/colors";

const Button = styled.button`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4.5px;
  
  cursor: pointer;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  opacity: ${(props) => props.disabled ? 0.7 : 1};
  
  font-size: 27px;
  line-height: 40px;
  text-align: center;
  font-family: Oswald;
  
  background-color: ${blue};
  color: ${white};
`;

export default Button;