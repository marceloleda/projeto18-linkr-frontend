import { Link } from "react-router-dom";
import styled from "styled-components";
import { white } from "../constants/colors";

const StyledLink = styled(Link)`
  font-style: regular;
  line-height: 24px;
  text-decoration: none;
  text-decoration: underline;
  fill: Solid;
  color: ${white};
  font-family: Lato;
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 12px;

  @media screen and (max-width: 800px) {
    
  }
`;

export default StyledLink;
