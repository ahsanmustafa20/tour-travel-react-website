import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home() {
    return (
    <>
    <Navbar />
    <Hero 
    className="hero"
    srcImg="https://images.unsplash.com/photo-1751225750479-43ad27b94fa0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="Welcome to Our Tour & Travel"
    description="Discover the world with us!"
    linkText="Explore Now"
    url="/"
    urlText="Explore Now"
    linkClassName="show"
    />
    <Destination />
    <Trip />
    <Footer/>
    </>
    );
}

export default Home;