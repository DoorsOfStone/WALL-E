import "./App.css";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Quotes from "./components/Quotes";

function App() {
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
