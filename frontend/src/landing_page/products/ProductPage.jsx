import Hero from "./Hero";
import Navbar from "../Navbar";
import Footer from "../Footer";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";


export default function ProductPage() {

    return (
        <>
            <Navbar />
            <Hero />
            <LeftSection />
            <RightSection />
            <Universe />
            <Footer />
        </>
    );
}