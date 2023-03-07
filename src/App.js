import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

export default function App() {
  return (
    <ContainerApp>
      <p>Hello World!</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<componente />} />
          <Route path="/" element={<componente />} />
          <Route path="/" element={<componente />} />
          <Route path="/" element={<componente />} />
        </Routes>
      </BrowserRouter>
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
  height: 100vh;
  background-color: darkgray;
`;