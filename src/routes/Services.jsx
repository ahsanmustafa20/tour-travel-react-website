import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Services() {
    return (
    <>
    <Navbar/>
    <Hero 
        className="hero-about"
        srcImg="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Services" 
    />
    <Trip />
    <Footer />
    </>
    );
}

export default Services;