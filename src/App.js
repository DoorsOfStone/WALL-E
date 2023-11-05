import "./App.css";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Qoutes from "./components/Qoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Qoutes />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
