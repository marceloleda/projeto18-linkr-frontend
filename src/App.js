import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import styled from "styled-components";
import { background } from "./constants/colors";
import TimeLine from "./pages/timeline/TimeLine";

export default function App() {
  return (
    <AuthProvider>
      <ContainerApp>
        <BrowserRouter>
          <Routes>
            <Route path="/timeline" element={<TimeLine />} />
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
