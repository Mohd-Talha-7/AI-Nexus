import React from 'react';
import { XIcon } from './icons/XIcon';

interface ExitIntentPopupProps {
    onClose: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-md w-full relative transform transition-all animate-fade-in-up">
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-800">
                    <XIcon />
                </button>
                <div className="p-8 text-center">
                    <h2 className="text-2xl font-bold text-primary mb-2">Wait! Don't Go...</h2>
                    <p className="text-lg text-dark-text mb-4">You're one step away from unlocking your AI potential.</p>
                    <div className="bg-primary/10 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold text-dark-text">🔥 Don’t Miss the Next AI Bootcamp</h3>
                        <p className="text-dark-text-secondary mt-2">Limited seats available. Register now for our next free introductory webinar and claim your spot!</p>
                    </div>
                    <a href="#" className="mt-6 w-full block bg-secondary text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                        Register Free Now
                    </a>
                     <button onClick={onClose} className="mt-3 text-sm text-gray-500 hover:underline">
                        No, I'm not interested
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExitIntentPopup;