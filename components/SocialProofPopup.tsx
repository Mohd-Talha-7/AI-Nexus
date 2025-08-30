import React, { useState, useEffect } from 'react';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

const proofs = [
    { name: 'Riya', location: 'Delhi', action: 'booked a demo' },
    { name: 'Amit', location: 'Bangalore', action: 'joined the AI Bootcamp' },
    { name: 'Sarah', location: 'Mumbai', action: 'upgraded to Professional' },
    { name: 'John', location: 'Pune', action: 'started a free trial' },
    { name: 'Anika', location: 'Hyderabad', action: 'automated her business' }
];

const SocialProofPopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentProof, setCurrentProof] = useState(proofs[0]);

    useEffect(() => {
        let timerId: number;

        const cyclePopups = () => {
            setCurrentProof(proofs[Math.floor(Math.random() * proofs.length)]);
            setIsVisible(true);

            // Set timer to hide the popup after 5s
            timerId = window.setTimeout(() => {
                setIsVisible(false);
                // Then, set timer to show the next popup after a 7s delay
                timerId = window.setTimeout(cyclePopups, 7000); // 12s total cycle - 5s visible = 7s hidden
            }, 5000);
        };

        // Start the first cycle after an initial 7s delay
        const initialTimeoutId = window.setTimeout(cyclePopups, 7000);

        return () => {
            clearTimeout(initialTimeoutId);
            clearTimeout(timerId);
        };
    }, []);

    const transitionClasses = isVisible
        ? 'translate-x-0 opacity-100'
        : '-translate-x-full opacity-0';

    return (
        <div className={`fixed bottom-5 left-5 bg-white shadow-2xl rounded-lg p-4 flex items-center transition-all duration-500 z-40 border border-light-border ${transitionClasses}`}>
            <CheckCircleIcon className="w-8 h-8 text-secondary mr-3 flex-shrink-0" />
            <div>
                <p className="font-semibold text-dark-text">{currentProof.name} from {currentProof.location}</p>
                <p className="text-sm text-dark-text-secondary">{currentProof.action} just now</p>
            </div>
        </div>
    );
};

export default SocialProofPopup;