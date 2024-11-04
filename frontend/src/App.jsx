import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Alte rute (ex. Products, Profile) vor fi adăugate pe parcurs */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
