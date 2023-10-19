import SocialLinks from "./components/SocialLinks/SocialLinks";
import NavBar from "./components/navbar/NavBar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import ContactForm from "./components/Contact/ContactForm";
function App() {
  return (
    <>
      <div className="h-full w-full bg-slate-950">
        <div
          className="floatcolors h-[10em] w-[4em] bg-lime-200 blur-3xl
          hidden md:absolute z-0 top-[50vh] left-[60vw] backdrop-blur-xl "
        ></div>
        <NavBar />
        <Hero />
        <Skills />
        <SocialLinks/>
        <ContactForm />
      </div>
    </>
  );
}

export default App;
