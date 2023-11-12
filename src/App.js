import "./App.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Quotes from "./components/Quotes";
import Community from "./routes/Community";
import Walle from "./routes/Walle";
import Register from "./routes/Register";
import Profile from "./routes/Profile";

function App() {
  // const root = createRoot(document.getElementById("root"));

  return (
    <div className="App">
      <Navbar />
      <Quotes />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
