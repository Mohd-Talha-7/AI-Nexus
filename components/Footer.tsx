import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark-text text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2"><SparklesIcon className="w-6 h-6 text-primary"/>Ameego AI Nexus</h3>
                        <p className="mt-4 text-gray-400 max-w-xs">AI agents that deliver real results for students, businesses, and institutions.</p>
                        <form className="mt-6 flex">
                            <input type="email" placeholder="Join our newsletter" className="w-full p-2 border border-gray-600 rounded-l-md focus:ring-2 focus:ring-primary focus:outline-none bg-gray-800 text-white"/>
                            <button type="submit" className="bg-primary text-white px-4 rounded-r-md hover:bg-primary-700 transition-colors">Go</button>
                        </form>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white">Products</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#solutions" className="text-gray-400 hover:text-primary">AI Bootcamp</a></li>
                            <li><a href="#solutions" className="text-gray-400 hover:text-primary">Business Agents</a></li>
                            <li><a href="#solutions" className="text-gray-400 hover:text-primary">School Chatbots</a></li>
                            <li><a href="#solutions" className="text-gray-400 hover:text-primary">Enterprise AI</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white">Resources</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#success-stories" className="text-gray-400 hover:text-primary">Success Stories</a></li>
                            <li><a href="#features" className="text-gray-400 hover:text-primary">Features</a></li>
                            <li><a href="#testimonials" className="text-gray-400 hover:text-primary">Testimonials</a></li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-semibold text-white">Company</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-primary">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary">Careers</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-primary">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Ameego AI Nexus. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-500 hover:text-primary">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-primary">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;