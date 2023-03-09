import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import TimeLine from "./Components/TimeLine";

export default function App() {
  return (
    <ContainerApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<componente />} />
          <Route path="/" element={<componente />} />
          <Route path="/timeline" element={<TimeLine />} />
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