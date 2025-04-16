import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Documentation from "./pages/Documentation";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documentation" element={<Documentation />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
