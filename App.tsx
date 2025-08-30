import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SolutionsGrid from './components/SolutionsGrid';
import SuccessStories from './components/SuccessStories';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import TechStack from './components/TechStack';
import Pricing from './components/Pricing';
import Engagement from './components/Engagement';
import Footer from './components/Footer';
import FloatingWidget from './components/FloatingWidget';
import ExitIntentPopup from './components/ExitIntentPopup';
import SocialProofPopup from './components/SocialProofPopup';

const App: React.FC = () => {
    const [showExitIntent, setShowExitIntent] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !sessionStorage.getItem('exitIntentShown')) {
                setShowExitIntent(true);
                sessionStorage.setItem('exitIntentShown', 'true');
            }
        };
        
        document.addEventListener('mouseleave', handleMouseLeave);
        
        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="bg-light-bg font-sans">
            <Header />
            <main>
                <Hero />
                <SolutionsGrid />
                <SuccessStories />
                <UseCases />
                <Testimonials />
                <TechStack />
                <Pricing />
                <Engagement />
            </main>
            <Footer />
            <FloatingWidget />
            <SocialProofPopup />
            {showExitIntent && <ExitIntentPopup onClose={() => setShowExitIntent(false)} />}
        </div>
    );
};

export default App;