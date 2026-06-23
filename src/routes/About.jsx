import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
    return (
    <>
    <Navbar/>
    <Hero 
        className="hero-about"
        srcImg="https://images.unsplash.com/photo-1731737634938-b4612a55d95f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="About Us" 
    />

    <AboutUs/>
    <Footer/>
    </>
    );
}

export default About;