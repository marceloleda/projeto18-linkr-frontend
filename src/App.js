import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import styled from "styled-components";
import Header from "./components/page/Header";
import { background } from "./constants/colors";

export default function App() {
  return (
    <ContainerApp>
      <Header />
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
  background-color: ${background};
`;

