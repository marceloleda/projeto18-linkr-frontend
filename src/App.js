import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import styled from "styled-components";
import Header from "./components/page/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { background } from "./constants/colors";

export default function App() {
  return (
    <AuthProvider>
      <ContainerApp>
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<componente />} />
            <Route path="/" element={<componente />} />
          </Routes>
        </BrowserRouter>
      </ContainerApp>
    </AuthProvider>
  );
}

const ContainerApp = styled.div`
  height: 100vh;
  background-color: ${background};
`;
