import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/LandingPage";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Navbar from "./components/Navbar";
import HealthProblemPage from "./components/HealthProblemPage";

function App() {
  return (
    <div className="App">
      <div className="App">
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/health-problem" element={<HealthProblemPage />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
