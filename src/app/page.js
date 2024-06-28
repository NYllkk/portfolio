import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainBanner from "./components/home/MainBanner";
import Project from "./components/projects/Project";
import Skills from "./components/skills/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <MainBanner />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
