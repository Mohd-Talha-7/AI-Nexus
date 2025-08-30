import React from 'react';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { XIcon } from './icons/XIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';

const plans = [
    {
        name: "Starter",
        target: "Perfect for students and small businesses",
        price: "₹2,999",
        originalPrice: "₹4,999",
        priceDetails: "/month",
        features: {
            included: ["Up to 1,000 conversations/month", "WhatsApp & Telegram integration", "Basic AI training materials", "Email support", "Standard response time", "Basic analytics dashboard", "Mobile app access"],
            excluded: ["Custom integrations", "Priority support", "Advanced analytics"]
        },
        cta: "Start Free Trial",
        primary: false,
    },
    {
        name: "Professional",
        target: "Advanced features for growing businesses",
        price: "₹9,999",
        originalPrice: "₹14,999",
        priceDetails: "/month",
        features: {
            included: ["Up to 10,000 conversations/month", "Multi-platform integrations", "Advanced AI customization", "Priority support (4hr response)", "Advanced analytics & insights", "CRM integration", "Custom workflows", "Team collaboration tools", "API access"],
            excluded: ["White-label solution", "Dedicated account manager"]
        },
        cta: "Get Professional",
        primary: true,
    },
    {
        name: "Enterprise",
        target: "Custom solutions for large organizations",
        price: "Custom",
        originalPrice: "",
        priceDetails: "",
        features: {
            included: ["Unlimited conversations", "Full platform customization", "Dedicated account manager", "24/7 priority support", "Advanced security & compliance", "Custom integrations", "White-label solution", "On-premise deployment option", "SLA guarantee", "Training & onboarding"],
            excluded: []
        },
        cta: "Contact Sales",
        primary: false,
    },
    {
        name: "Educational",
        target: "Special pricing for schools and universities",
        price: "₹4,999",
        originalPrice: "₹9,999",
        priceDetails: "/month",
        features: {
            included: ["Up to 5,000 conversations/month", "WhatsApp & Telegram for parents", "Student support bot", "Administrative automation", "Parent communication portal", "Homework & assignment reminders", "Fee payment integration", "Academic progress tracking"],
            excluded: ["Custom branding", "Advanced integrations"]
        },
        cta: "School Demo",
        primary: false,
    },
];

const comparisonFeatures = [
    { feature: 'Monthly Conversations', values: ['1,000', '10,000', 'Unlimited', '5,000'] },
    { feature: 'Platform Integrations', values: ['2', '10+', 'Unlimited', '5'] },
    { feature: 'Response Time', values: ['Standard', '4 hours', '1 hour', 'Same day'] },
    { feature: 'Analytics', values: ['Basic', 'Advanced', 'Custom', 'School-specific'] },
    { feature: 'Support', values: ['Email', 'Priority', 'Dedicated', 'Educational'] },
];

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-text">Choose Your AI Transformation Plan</h2>
                    <p className="mt-4 text-lg text-dark-text-secondary">Flexible pricing for every need - from students to enterprises.</p>
                    <div className="mt-4 inline-block bg-accent-orange/10 text-accent-orange font-bold px-4 py-2 rounded-full">
                        Limited Time: 50% Off First 3 Months!
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`rounded-xl shadow-lg flex flex-col h-full transition-all duration-300 ${plan.primary ? 'bg-primary text-white scale-105' : 'bg-light-card'}`}>
                            <div className="p-6 relative">
                                {plan.primary && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</div>}
                                <h3 className={`text-2xl font-bold ${plan.primary ? 'text-white' : 'text-dark-text'}`}>{plan.name}</h3>
                                <p className={`mt-2 text-sm h-10 ${plan.primary ? 'text-primary-200' : 'text-dark-text-secondary'}`}>{plan.target}</p>
                                <div className="mt-4">
                                    <span className={`text-4xl font-extrabold ${plan.primary ? 'text-white' : 'text-dark-text'}`}>{plan.price}</span>
                                    {plan.priceDetails && <span className={`ml-1 text-base font-medium ${plan.primary ? 'text-primary-200' : 'text-dark-text-secondary'}`}>{plan.priceDetails}</span>}
                                    {plan.originalPrice && <span className={`ml-2 line-through ${plan.primary ? 'text-primary-300' : 'text-gray-400'}`}>{plan.originalPrice}</span>}
                                </div>
                            </div>
                            <div className={`p-6 flex-grow ${plan.primary ? 'bg-primary-700/50' : 'bg-white'}`}>
                                <ul className="space-y-4">
                                    {plan.features.included.map(feature => (
                                        <li key={feature} className="flex items-start">
                                            <CheckCircleIcon className={`flex-shrink-0 w-6 h-6 mr-3 ${plan.primary ? 'text-white' : 'text-secondary'}`} />
                                            <span className={`${plan.primary ? 'text-primary-100' : 'text-dark-text'}`}>{feature}</span>
                                        </li>
                                    ))}
                                     {plan.features.excluded.map(feature => (
                                        <li key={feature} className="flex items-start text-gray-400">
                                            <XIcon className={`flex-shrink-0 w-6 h-6 mr-3`} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-6">
                                <a href="#engagement" className={`w-full text-center block px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${plan.primary ? 'bg-white text-primary hover:bg-gray-200' : 'bg-primary text-white hover:bg-primary-700'}`}>
                                    {plan.cta}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Comparison Table */}
                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-center text-dark-text mb-8">Feature Comparison</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-dark-text-secondary">
                            <thead className="text-xs text-dark-text uppercase bg-light-card">
                                <tr>
                                    <th scope="col" className="px-6 py-3 rounded-tl-lg">Feature</th>
                                    {plans.map(p => <th key={p.name} scope="col" className="px-6 py-3 text-center">{p.name}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonFeatures.map((feat, fIndex) => (
                                    <tr key={fIndex} className="bg-white border-b">
                                        <th scope="row" className="px-6 py-4 font-medium text-dark-text whitespace-nowrap">{feat.feature}</th>
                                        {feat.values.map((value, vIndex) => (
                                            <td key={vIndex} className="px-6 py-4 text-center">{value}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                {/* Guarantee */}
                <div className="mt-20 max-w-4xl mx-auto bg-light-card border-l-4 border-secondary p-8 rounded-r-lg">
                    <div className="flex items-start gap-6">
                        <ShieldCheckIcon className="w-16 h-16 text-secondary flex-shrink-0" />
                        <div>
                            <h3 className="text-2xl font-bold text-dark-text">30-Day Money-Back Guarantee</h3>
                            <p className="mt-2 text-dark-text-secondary">Not satisfied with your AI agents? Get a full refund within 30 days. No questions asked.</p>
                             <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-dark-text">
                                <span className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-secondary mr-2" /> No Setup Fees</span>
                                <span className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-secondary mr-2" /> Cancel Anytime</span>
                                <span className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-secondary mr-2" /> Free Migration Help</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Pricing;