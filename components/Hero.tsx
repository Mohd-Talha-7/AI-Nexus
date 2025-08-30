import React from 'react';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { ClockIcon } from './icons/ClockIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';

const Hero: React.FC = () => {
    return (
        <section className="bg-light-bg text-dark-text">
            {/* Top Notification Bar */}
            <div className="bg-primary text-white text-xs md:text-sm text-center py-2">
                <p>10,000+ Students Placed • 500+ Businesses Automated • 200+ Schools Connected</p>
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter mb-4 animate-fade-in-up text-dark-text">
                        Transform Your Career & Business With AI Agents That Deliver Real Results
                    </h1>
                    <p className="text-lg md:text-xl text-dark-text-secondary max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Personalized AI for students, businesses, and institutions—Experience the next generation of automated productivity, customer engagement, and personalized learning.
                    </p>
                </div>
                
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <div className="bg-light-card p-6 rounded-lg border border-light-border flex flex-col items-center justify-center text-center">
                        <CheckCircleIcon className="w-10 h-10 text-secondary mb-3" />
                        <p className="text-xl font-bold text-dark-text">95% Success Rate</p>
                    </div>
                    <div className="bg-light-card p-6 rounded-lg border border-light-border flex flex-col items-center justify-center text-center">
                        <ShieldCheckIcon className="w-10 h-10 text-primary mb-3" />
                        <p className="text-xl font-bold text-dark-text">24/7 AI Support</p>
                    </div>
                    <div className="bg-light-card p-6 rounded-lg border border-light-border flex flex-col items-center justify-center text-center">
                        <ClockIcon className="w-10 h-10 text-accent-orange mb-3" />
                        <p className="text-xl font-bold text-dark-text">72h Setup Time</p>
                    </div>
                </div>

                <div className="mt-12">
                     <a href="#solutions" className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Explore AI Solutions
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;