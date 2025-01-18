import "./app.scss"
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/Hero"
import Parallax from "./Components/Parallax/Parallax";
import Services from "./Components/Services/Services";
import Projects from "./Components/projects/projects";
import Contact from "./Components/Contact/contact";
const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id = "Services"><Parallax type="Services"/></section>
    <section><Services/></section>
    <section id="Projects"><Parallax type="Projects"/></section>
    <Projects/>
    <section id="Contact"><Contact/></section>
  </div>;
};

export default App;
