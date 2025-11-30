import { Routes, Route, createBrowserRouter } from "react-router-dom";
import Footer from './Footer.jsx'
import NewsletterSection from "./NewsLetterSection.jsx";
import FAQSection from "./FAQSection.jsx";
import PricingPage from "./PricingSection.jsx";
import SecuritySection from "./SecuritySection.jsx";
import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import FeatureSection from "./FeatureSection.jsx";
import CommunitySection from "./CommunitySection.jsx";


function LandingPage() {

    return (
        <>
            <Navbar />
            <HeroSection />
            <CommunitySection />
            <FeatureSection />
            <SecuritySection />
            <PricingPage />
            <FAQSection />
            <NewsletterSection />
            <Footer />
        </>
    );
}

export default LandingPage;
