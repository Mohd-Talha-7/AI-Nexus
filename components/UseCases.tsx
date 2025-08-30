import React from 'react';
import { UsersIcon } from './icons/UsersIcon';
import { TrendingUpIcon } from './icons/TrendingUpIcon';
import { AcademicCapIcon } from './icons/AcademicCapIcon';
import { BuildingOfficeIcon } from './icons/BuildingOfficeIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';


const features = [
    {
        layout: 'imageRight',
        icon: <UsersIcon className="w-8 h-8 text-primary" />,
        title: "Automate up to 70% of Customer Queries, 24/7",
        description: "Never miss a customer inquiry with intelligent AI agents that handle complex conversations naturally.",
        subFeatures: ["Instant response to customer queries", "Multi-language support", "Context-aware conversations", "Seamless handover to humans when needed"],
        stat: "Average 70% automation rate",
        visual: () => (
            <div className="bg-light-bg border border-light-border rounded-lg p-4 w-full h-full flex flex-col shadow-lg">
                <div className="flex items-center gap-1.5 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-grow bg-white rounded p-4 flex flex-col justify-end">
                     <div className="bg-primary/80 self-start text-white text-sm px-3 py-1.5 rounded-lg mb-2">Hello! How can I help you today?</div>
                     <div className="bg-gray-200 self-end text-dark-text text-sm px-3 py-1.5 rounded-lg mb-2">I want to track my order.</div>
                     <div className="bg-secondary self-start text-white text-sm px-3 py-1.5 rounded-lg animate-pulse-slow">Live Conversation</div>
                </div>
            </div>
        )
    },
    {
        layout: 'imageLeft',
        icon: <TrendingUpIcon className="w-8 h-8 text-primary" />,
        title: "Increase Lead Conversion by 5x with Smart Qualification",
        description: "AI agents that understand your business and qualify leads while you sleep.",
        subFeatures: ["Intelligent lead scoring", "Automated follow-up sequences", "Real-time lead insights", "CRM integration and sync"],
        stat: "500% average conversion increase",
        visual: () => (
            <div className="bg-light-bg border border-light-border rounded-lg p-6 w-full h-full flex flex-col justify-between shadow-lg">
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                    <div>
                        <p className="text-3xl font-bold text-primary">5x</p>
                        <p className="text-sm text-dark-text-secondary">Conversion</p>
                    </div>
                     <div>
                        <p className="text-3xl font-bold text-purple-500">85%</p>
                        <p className="text-sm text-dark-text-secondary">Accuracy</p>
                    </div>
                     <div>
                        <p className="text-3xl font-bold text-secondary">24/7</p>
                        <p className="text-sm text-dark-text-secondary">Available</p>
                    </div>
                </div>
                <div className="flex-grow flex items-end justify-between gap-2">
                    <div className="w-1/6 bg-primary/20 rounded-t-md h-[40%]"></div>
                    <div className="w-1/6 bg-primary/40 rounded-t-md h-[60%]"></div>
                    <div className="w-1/6 bg-primary/60 rounded-t-md h-[50%]"></div>
                    <div className="w-1/6 bg-primary/80 rounded-t-md h-[80%]"></div>
                    <div className="w-1/6 bg-primary rounded-t-md h-[70%]"></div>
                    <div className="w-1/6 bg-primary/50 rounded-t-md h-[90%]"></div>
                </div>
            </div>
        )
    },
    {
        layout: 'imageRight',
        icon: <AcademicCapIcon className="w-8 h-8 text-primary" />,
        title: "Scale Student Support to Handle 1000+ Queries Daily",
        description: "Educational AI that provides instant academic support and administrative assistance.",
        subFeatures: ["24/7 study support", "Instant doubt resolution", "Administrative query handling", "Progress tracking and insights"],
        stat: "1000+ queries handled daily",
        visual: () => (
            <div className="bg-light-bg border border-light-border rounded-lg p-6 w-full h-full flex flex-col justify-center items-center shadow-lg text-center">
                <h4 className="text-lg font-semibold text-dark-text">Active Students</h4>
                <p className="text-6xl font-extrabold text-primary my-4">1,247</p>
                <p className="text-secondary font-bold">online</p>
            </div>
        )
    },
    {
        layout: 'imageLeft',
        icon: <BuildingOfficeIcon className="w-8 h-8 text-primary" />,
        title: "Deploy Enterprise Solutions in Under 48 Hours",
        description: "Rapid deployment with enterprise-grade security and unlimited scalability.",
        subFeatures: ["Quick setup and configuration", "Enterprise security compliance", "Unlimited user scaling", "Custom workflow integration"],
        stat: "48-hour deployment guarantee",
        visual: () => (
             <div className="bg-light-bg border border-light-border rounded-lg p-6 w-full h-full flex flex-col justify-around shadow-lg">
                <div className="text-center">
                    <p className="text-sm text-dark-text-secondary">Deployment Time</p>
                    <p className="text-4xl font-bold text-primary">48 Hours</p>
                </div>
                <div className="flex justify-around text-center mt-4">
                     <div>
                        <p className="text-sm text-dark-text-secondary">Security</p>
                        <p className="text-lg font-semibold text-secondary">Enterprise</p>
                    </div>
                     <div>
                        <p className="text-sm text-dark-text-secondary">Scalability</p>
                        <p className="text-lg font-semibold text-secondary">Auto Scaling</p>
                    </div>
                </div>
            </div>
        )
    }
];

const UseCases: React.FC = () => {
    return (
        <section id="features" className="py-20 bg-light-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-text">Powerful Features That Drive Results</h2>
                    <p className="mt-4 text-lg text-dark-text-secondary">See why thousands choose our AI agents for their automation needs.</p>
                </div>
                 <div className="space-y-24">
                    {features.map((feature, index) => (
                        <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${feature.layout === 'imageLeft' ? 'lg:grid-flow-col-dense' : ''}`}>
                            <div className={` ${feature.layout === 'imageLeft' ? 'lg:col-start-2' : ''}`}>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-primary/10 p-3 rounded-full">{feature.icon}</div>
                                    <h2 className="text-2xl md:text-3xl font-bold">{feature.title}</h2>
                                </div>
                                <p className="text-dark-text-secondary mb-6">{feature.description}</p>
                                <ul className="space-y-3 mb-8">
                                    {feature.subFeatures.map(sf => (
                                        <li key={sf} className="flex items-center">
                                            <CheckCircleIcon className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                                            <span>{sf}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto pt-4 border-t border-light-border">
                                    <p className="text-center text-primary font-bold text-lg">{feature.stat}</p>
                                </div>
                            </div>
                            <div className={`min-h-[350px] ${feature.layout === 'imageLeft' ? 'lg:col-start-1' : ''}`}>
                                <feature.visual />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;