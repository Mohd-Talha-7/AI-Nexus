import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

const partners = [
    { name: 'Salesforce', logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg' },
    { name: 'HubSpot', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg' },
    { name: 'Zoho', logo: 'https://cdn.worldvectorlogo.com/logos/zoho.svg' },
    { name: 'Microsoft Teams', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg' },
    { name: 'Slack', logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg' },
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg' },
];

const certifications = ["GDPR", "SOC 2", "ISO 27001", "CCPA", "HIPAA Ready", "PCI DSS"];

const securityFeatures = [
    { title: "End-to-End Encryption", description: "All conversations encrypted in transit and at rest", badge: "Military Grade", badgeColor: "bg-blue-600" },
    { title: "Data Privacy Compliance", description: "GDPR, CCPA, and SOC 2 Type II compliant", badge: "Certified", badgeColor: "bg-green-600" },
    { title: "Access Controls", description: "Role-based permissions and audit trails", badge: "Enterprise", badgeColor: "bg-gray-700" },
    { title: "24/7 Monitoring", description: "Real-time security monitoring and alerts", badge: "Active", badgeColor: "bg-red-600" },
]

const TechStack: React.FC = () => {
    const ArchBox = ({ title, items }: { title: string, items: string[] }) => (
        <div className="bg-white p-4 rounded-lg border border-light-border text-center shadow-sm">
            <h4 className="font-bold text-dark-text">{title}</h4>
            <div className="text-sm text-dark-text-secondary mt-1">{items.join(' • ')}</div>
        </div>
    );
    
    return (
        <section id="tech" className="py-20 bg-light-card">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                     <h2 className="text-3xl md:text-4xl font-bold text-dark-text">Built on Cutting-Edge Technology</h2>
                     <p className="mt-4 text-lg text-dark-text-secondary">Secure, scalable, and reliable AI infrastructure you can trust.</p>
                </div>
                
                {/* AI Agent Architecture */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-8">AI Agent Architecture</h3>
                    <div className="flex items-center justify-center gap-4 md:gap-8 flex-col md:flex-row">
                        <ArchBox title="User Interface" items={["WhatsApp", "Telegram", "Web"]} />
                        <ArrowRightIcon className="w-8 h-8 text-primary shrink-0 transform md:rotate-0 rotate-90" />
                        <ArchBox title="AI Processing" items={["NLP", "ML", "RAG"]} />
                        <ArrowRightIcon className="w-8 h-8 text-primary shrink-0 transform md:rotate-0 rotate-90" />
                        <ArchBox title="Business Systems" items={["CRM", "ERP", "Database"]} />
                    </div>
                </div>

                {/* Technology Stack */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-6 rounded-lg border border-light-border">
                        <h4 className="text-xl font-bold mb-4 text-dark-text">AI & Machine Learning</h4>
                        <ul className="space-y-3 text-dark-text-secondary">
                            <li><strong>GPT-4 & Claude:</strong> Latest LLM models for intelligent conversations.</li>
                            <li><strong>RAG Systems:</strong> Retrieval-augmented generation for accurate responses.</li>
                            <li><strong>NLP Processing:</strong> Multi-language natural language understanding.</li>
                        </ul>
                    </div>
                     <div className="bg-white p-6 rounded-lg border border-light-border">
                        <h4 className="text-xl font-bold mb-4 text-dark-text">Integration Platforms</h4>
                        <ul className="space-y-3 text-dark-text-secondary">
                            <li><strong>WhatsApp Business API:</strong> Official WhatsApp integration.</li>
                            <li><strong>Telegram Bot API:</strong> Native Telegram bot platform.</li>
                            <li><strong>CRM/ERP Systems:</strong> Seamless business system integration.</li>
                        </ul>
                    </div>
                     <div className="bg-white p-6 rounded-lg border border-light-border">
                        <h4 className="text-xl font-bold mb-4 text-dark-text">Infrastructure</h4>
                         <ul className="space-y-3 text-dark-text-secondary">
                            <li><strong>AWS Cloud:</strong> Enterprise-grade cloud infrastructure.</li>
                            <li><strong>Kubernetes:</strong> Auto-scaling container orchestration.</li>
                            <li><strong>Real-time APIs:</strong> Sub-second response times globally.</li>
                        </ul>
                    </div>
                </div>

                {/* Security */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-8">Security Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {securityFeatures.map(feature => (
                             <div key={feature.title} className="bg-white p-6 rounded-lg border border-light-border text-center">
                                 <span className={`text-xs text-white font-bold px-3 py-1 rounded-full ${feature.badgeColor} mb-3 inline-block`}>{feature.badge}</span>
                                <h4 className="font-bold text-dark-text">{feature.title}</h4>
                                <p className="text-sm text-dark-text-secondary mt-1">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="space-y-12">
                    <div>
                        <h3 className="text-2xl font-bold text-center mb-8">Compliance & Certifications</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {certifications.map(cert => (
                                <span key={cert} className="inline-block bg-white border border-light-border text-dark-text-secondary text-sm font-semibold px-4 py-2 rounded-md">
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                         <h3 className="text-2xl font-bold text-center mb-8">Integration Partners</h3>
                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {partners.map((partner) => (
                                <div key={partner.name} className="p-6 bg-white border border-light-border rounded-lg flex flex-col items-center justify-center transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 aspect-square">
                                    <img loading="eager" src={partner.logo} alt={`${partner.name} Logo`} className="h-16 w-auto max-w-[8rem] object-contain" />
                                </div>
                            ))}
                         </div>
                         <p className="text-center mt-6 text-dark-text-secondary">+ 100+ more integrations available</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TechStack;