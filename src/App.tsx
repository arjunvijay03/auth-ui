import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginFormTemplate, RegisterFormTemplate } from "./components/template";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginFormTemplate />} />
          <Route path="/register" element={<RegisterFormTemplate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
