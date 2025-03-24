import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Sections with IDs for smooth scrolling */}
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
