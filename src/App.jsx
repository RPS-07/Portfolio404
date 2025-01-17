import "./app.scss"
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/Hero"
import Parallax from "./Components/Parallax/Parallax";
import Services from "./Components/Services/Services";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id = "Services"><Parallax type="Services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="Portfolio"/></section>
    <Projects/>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
