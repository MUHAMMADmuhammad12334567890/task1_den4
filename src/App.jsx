import MainPage from "./pages/MainPage/MainPage";
import FeaturesPage from "./pages/FeaturesPage/FeaturesPage";
import Contact from "./pages/Contacts/Contact";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/feature" element={<FeaturesPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
