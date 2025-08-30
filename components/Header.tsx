import React, { useState } from 'react';
import { MenuIcon } from './icons/MenuIcon';
import { XIcon } from './icons/XIcon';
import { SparklesIcon } from './icons/SparklesIcon';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Solutions', href: '#solutions' },
        { name: 'Success Stories', href: '#success-stories' },
        { name: 'Features', href: '#features' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="bg-light-bg/80 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300 border-b border-light-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center gap-2 text-2xl font-bold text-dark-text">
                           <SparklesIcon className="w-7 h-7 text-primary" />
                           Ameego AI Nexus
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {navLinks.map(link => (
                                <a key={link.name} href={link.href} className="text-dark-text-secondary hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                         <a href="#" className="text-dark-text ring-1 ring-light-border px-4 py-2 rounded-md text-sm font-medium hover:bg-light-card transition-colors">
                            Sign In
                         </a>
                         <a href="#" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-transform transform hover:scale-105">
                            Book Demo
                        </a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4 p-2 rounded-md text-dark-text-secondary hover:text-dark-text focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <XIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-light-bg border-t border-light-border">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map(link => (
                            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-dark-text-secondary hover:bg-light-card block px-3 py-2 rounded-md text-base font-medium">
                                {link.name}
                            </a>
                        ))}
                         <a href="#" onClick={() => setIsMenuOpen(false)} className="bg-primary text-white block w-full text-center mt-2 px-4 py-2 rounded-md text-base font-medium hover:bg-primary-700">
                            Book Demo
                        </a>
                         <a href="#" onClick={() => setIsMenuOpen(false)} className="text-dark-text ring-1 ring-light-border block w-full text-center mt-2 px-4 py-2 rounded-md text-base font-medium hover:bg-light-card">
                            Sign In
                         </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;