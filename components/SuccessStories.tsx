import React from 'react';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { SparklesIcon } from './icons/SparklesIcon';

const SuccessStories: React.FC = () => {
    const handleChatClick = () => {
        window.dispatchEvent(new Event('elevenlabs-convai-open'));
    };

    return (
        <section id="success-stories" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-text">See AI in Action</h2>
                    <p className="mt-4 text-lg text-dark-text-secondary">Real implementations, real results, real success stories.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* Student Stories */}
                    <div className="bg-light-card p-8 rounded-xl border border-light-border">
                        <h3 className="text-2xl font-bold text-dark-text mb-2">Student Success Stories</h3>
                        <p className="text-dark-text-secondary mb-6">Real transformations from our AI bootcamp graduates.</p>
                        
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg shadow-md border border-light-border">
                                <h4 className="font-bold text-lg text-primary">₹12L Package at TCS</h4>
                                <p className="font-semibold my-1">From Zero to AI Engineer in 6 Months</p>
                                <p className="text-sm text-dark-text-secondary">Priya's journey from marketing to AI development.</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Real Client</span>
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Verified Results</span>
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Live Demo</span>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md border border-light-border">
                                 <h4 className="font-bold text-lg text-primary">3x Revenue Growth</h4>
                                <p className="font-semibold my-1">Building WhatsApp Chatbots for Local Business</p>
                                <p className="text-sm text-dark-text-secondary">How Rohit created his first AI startup.</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Real Client</span>
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Verified Results</span>
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Live Demo</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AI Assistant */}
                    <div className="bg-primary/90 text-white p-8 rounded-xl flex flex-col items-center justify-center text-center shadow-xl">
                        <SparklesIcon className="w-12 h-12 mb-4" />
                        <h3 className="text-2xl font-bold">Try Our AI Assistant</h3>
                        <p className="mt-2 text-primary-200">Experience our AI in action right here on this page.</p>
                        <button onClick={handleChatClick} className="mt-6 bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Chat with AI Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;