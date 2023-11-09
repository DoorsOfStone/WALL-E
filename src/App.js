import "./App.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Quotes from "./components/Quotes";

function App() {
  const root = createRoot(document.getElementById("root"));

  root.render(
    <div className="App">
      <Navbar />
      <Quotes />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
