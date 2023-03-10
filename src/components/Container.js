import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  overflow-y: hidden;
  //justify-content: space-between;

  img{
    margin-top: 65px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Container;