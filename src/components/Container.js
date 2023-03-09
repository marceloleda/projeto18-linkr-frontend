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

  @media screen and (min-width: 800px) {
    img{
      margin-top: 100px;
    }
  }
`;

export default Container;