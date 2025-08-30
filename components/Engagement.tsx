import React from 'react';
import { ZapIcon } from './icons/ZapIcon';
import { TrendingUpIcon } from './icons/TrendingUpIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

const Engagement: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-light-card">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto bg-primary text-white p-8 md:p-12 rounded-2xl shadow-2xl">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold">Ready to Transform with AI?</h2>
                        <p className="mt-4 text-lg md:text-xl text-primary-200 max-w-3xl mx-auto">
                            Join thousands who've already revolutionized their careers and businesses with our AI solutions.
                        </p>
                    </div>
                    
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="bg-white/10 p-4 rounded-lg"><strong>Instant ROI</strong> - See results within 48 hours</div>
                        <div className="bg-white/10 p-4 rounded-lg"><strong>24/7 Automation</strong> - Never miss an inquiry</div>
                        <div className="bg-white/10 p-4 rounded-lg"><strong>Proven Success</strong> - 10,000+ implementations</div>
                    </div>

                    <div className="mt-12 bg-white text-dark-text p-8 rounded-xl shadow-lg">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold">Get Your Personalized AI Strategy</h3>
                                <p className="mt-2 text-dark-text-secondary">Tell us about your needs and get a custom solution designed just for you.</p>
                                <div className="mt-4 space-y-2">
                                    <p className="text-sm flex items-center"><CheckCircleIcon className="w-5 h-5 text-secondary mr-2" /> "Increased revenue by 300% in 3 months" <span className="font-semibold ml-1">- Rajesh P.</span></p>
                                    <p className="text-sm flex items-center"><CheckCircleIcon className="w-5 h-5 text-secondary mr-2" /> "Got AI Developer job after 6 months" <span className="font-semibold ml-1">- Priya M.</span></p>
                                    <p className="text-sm flex items-center"><CheckCircleIcon className="w-5 h-5 text-secondary mr-2" /> "Automated 70% of parent queries" <span className="font-semibold ml-1">- Dr. Sharma</span></p>
                                </div>
                            </div>
                            <div>
                                <form className="space-y-4">
                                    <input type="email" placeholder="Enter your business email" className="w-full p-3 border border-light-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" required />
                                    <button type="submit" className="w-full bg-secondary text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                        Get My Strategy
                                    </button>
                                </form>
                                 <p className="text-xs text-dark-text-secondary mt-2 text-center">✅ No spam, ever. ✅ Unsubscribe anytime. ✅ Free consultation included.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-12 bg-accent-red/20 border border-accent-red text-white p-6 rounded-lg">
                         <h4 className="font-bold text-xl text-center">⚠️ Don't Wait - Act Now!</h4>
                         <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center text-sm">
                            <li><span className="font-bold text-accent-orange">🔥 Limited seats</span> for next AI bootcamp batch</li>
                            <li><span className="font-bold text-accent-orange">⚡ Free setup</span> for first 100 businesses</li>
                            <li><span className="font-bold text-accent-orange">🎓 Early bird pricing</span> ends in 3 days</li>
                            <li><span className="font-bold text-accent-orange">🚀 Slots booking fast</span> for December</li>
                         </ul>
                    </div>

                </div>
                 <div className="text-center mt-8">
                    <p className="text-dark-text-secondary">The AI Revolution Won't Wait. While you're thinking, your competitors are getting ahead.</p>
                     <p className="font-semibold text-secondary mt-1">Risk-Free 30-day money-back guarantee.</p>
                </div>
            </div>
        </section>
    );
}

export default Engagement;