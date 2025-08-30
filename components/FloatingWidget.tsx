import React from 'react';

const FloatingWidget: React.FC = () => {
    return (
        <div className="group fixed bottom-5 right-5 z-40">
            <button className="w-16 h-16 bg-primary rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-primary-700 transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            </button>
            <div className="absolute bottom-1/2 translate-y-1/2 right-full mr-4 w-max bg-white border border-light-border text-dark-text text-sm px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Need help choosing?
                <br />
                Chat with our AI expert
                <div className="absolute left-full top-1/2 -translate-y-1/2 w-2 h-2 bg-white border-r border-b border-light-border transform rotate-[-45deg]"></div>
            </div>
        </div>
    );
};

export default FloatingWidget;