import React from 'react';
import { AcademicCapIcon } from './icons/AcademicCapIcon';
import { BriefcaseIcon } from './icons/BriefcaseIcon';
import { ChatBubbleLeftRightIcon } from './icons/ChatBubbleLeftRightIcon';
import { BuildingOfficeIcon } from './icons/BuildingOfficeIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

const solutions = [
    {
        icon: <AcademicCapIcon className="h-8 w-8 text-primary" />,
        badge: "FOMO Alert",
        badgeColor: "bg-accent-red",
        title: "AI Bootcamp 2.0",
        tagline: "Learn, Adapt, Thrive",
        subtitle: "Limited Seats Available",
        description: "Don't Get Left Behind in the AI Revolution - Master AI skills with hands-on training, live projects, and guaranteed placement support.",
        features: ["10,000+ Placed", "95% Success Rate", "Live Projects", "Hands-on Training", "Industry Mentors", "Job Guarantee"],
        cta: "Join Next Bootcamp"
    },
    {
        icon: <BriefcaseIcon className="h-8 w-8 text-primary" />,
        title: "Smart Business Agents",
        tagline: "Industry-Specific Solutions",
        subtitle: "Free Consultation",
        description: "Transform your business operations with AI agents tailored for healthcare, restaurants, retail, and more industries.",
        features: ["500+ Businesses", "70% Cost Reduction", "24/7 Support", "Custom Integration", "Multi-Platform", "Analytics Dashboard", "ROI Tracking"],
        cta: "See Demo for Healthcare"
    },
    {
        icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-primary" />,
        title: "School Chatbots",
        tagline: "WhatsApp & Telegram Integration",
        subtitle: "Special Education Pricing",
        description: "RAG-based chatbots for seamless parent communication, admin automation, and 24/7 student support.",
        features: ["200+ Schools", "90% Query Resolution", "Instant Responses", "Parent Portal", "Admin Automation", "Multi-Language", "Smart Notifications"],
        cta: "School Demo Request"
    },
    {
        icon: <BuildingOfficeIcon className="h-8 w-8 text-primary" />,
        title: "Enterprise AI Solutions",
        tagline: "Custom Development & Integration",
        subtitle: "Enterprise Consultation",
        description: "Scalable AI agents with enterprise-grade security, custom workflows, and seamless CRM/ERP integration.",
        features: ["Fortune 500 Clients", "99.9% Uptime", "SOC 2 Certified", "Custom Workflows", "Enterprise Security", "API Integration", "Dedicated Support"],
        cta: "Enterprise Consultation"
    },
]

const SolutionsGrid: React.FC = () => {
    return (
        <section id="solutions" className="py-20 bg-light-card">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-text">AI Agents Tailored for Your Success</h2>
                    <p className="mt-4 text-lg text-dark-text-secondary">From individual career growth to enterprise transformation, discover AI solutions designed for your specific goals and industry needs.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {solutions.map((solution, index) => (
                        <div key={index} className="group bg-light-bg p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-light-border hover:border-primary">
                            <div className="flex flex-col h-full">
                                {solution.badge && (
                                    <span className={`absolute top-0 -translate-y-1/2 left-8 text-xs font-bold px-3 py-1 rounded-full text-white ${solution.badgeColor}`}>
                                        {solution.badge}
                                    </span>
                                )}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                                        {solution.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-dark-text">{solution.title}</h3>
                                        <p className="text-primary font-semibold">{solution.tagline} - <span className="text-dark-text-secondary font-normal">{solution.subtitle}</span></p>
                                    </div>
                                </div>
                                <p className="mt-2 text-dark-text-secondary flex-grow">{solution.description}</p>
                                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
                                    {solution.features.map(feature => (
                                        <div key={feature} className="flex items-center text-sm text-dark-text">
                                            <CheckCircleIcon className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <a href="#engagement" className="mt-8 w-full text-center bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-all duration-300 transform group-hover:scale-105">
                                    {solution.cta}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionsGrid;