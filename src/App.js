import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import styled from "styled-components";
import TimeLine from "./pages/timeline/TimeLine";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { background } from "./constants/colors";

export default function App() {
  return (
    <AuthProvider>
      <ContainerApp>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/timeline" element={<TimeLine />} />
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
