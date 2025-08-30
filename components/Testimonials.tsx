import React from 'react';
import { TrendingUpIcon } from './icons/TrendingUpIcon';

const businessTestimonials = [
    {
        category: 'Food & Beverage',
        title: 'Mumbai Restaurant Chain',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop',
        quote: "Our AI bot handles everything from taking orders to answering menu questions. We've grown from 2 to 8 locations in just 6 months!",
        author: "Rajesh Patel, Owner, Spice Garden Restaurants",
        metrics: [
            { value: '70%', label: 'faster order processing', sub: 'Efficiency' },
            { value: '+45%', label: 'revenue growth', sub: 'Revenue' },
            { value: '95%', label: 'customer satisfaction', sub: 'Satisfaction' },
            { value: '40', label: 'hours/week saved', sub: 'Time' },
        ]
    },
    {
        category: 'Education',
        title: 'Delhi International School',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto-format&fit=crop',
        quote: "Parents love getting instant updates about their children. Our teachers can now focus on teaching instead of answering repetitive questions.",
        author: "Dr. Priya Sharma, Principal, Delhi International School",
        metrics: [
            { value: '90%', label: 'parent engagement', sub: 'Engagement' },
            { value: '2000+', label: 'queries/day automated', sub: 'Queries' },
            { value: '98%', label: 'parent satisfaction', sub: 'Satisfaction' },
            { value: '60%', label: 'admin time cut', sub: 'Efficiency' },
        ]
    },
     {
        category: 'Healthcare',
        title: 'Healthcare Clinic Network',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto-format&fit=crop',
        quote: "The AI handles appointments, sends reminders, and answers basic health queries. Our patients are happier and we serve 3x more people daily.",
        author: "Dr. Amit Kumar, Medical Director, HealthCare Plus",
        metrics: [
            { value: '300%', label: 'more appointments', sub: 'Appointments' },
            { value: '50%', label: 'reduction in no-shows', sub: 'Noshow' },
            { value: '92%', label: 'patient satisfaction', sub: 'Satisfaction' },
            { value: '+180%', label: 'revenue increase', sub: 'Revenue' },
        ]
    },
];

const studentSuccessStories = [
  "Priya Mehta: AI Developer at Infosys - ₹12 LPA - 6 months bootcamp - Previously: Marketing Executive",
  "Rohit Singh: ML Engineer at Flipkart - ₹18 LPA - 4 months bootcamp - Previously: Sales Manager",
  "Sneha Gupta: AI Consultant (Freelancer) - ₹25 LPA equivalent - 5 months bootcamp - Previously: Teacher"
];

const roiStats = [
    { value: "300%", label: "ROI Increase" },
    { value: "48hrs", label: "Setup Time" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "24/7", label: "Availability" },
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-light-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-text">Real Results, Real Impact</h2>
                    <p className="mt-4 text-lg text-dark-text-secondary">Success stories that showcase the transformative power of AI agents.</p>
                </div>

                {/* Business Transformations */}
                <div className="space-y-16">
                    {businessTestimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-light-border">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <span className="bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-full self-start mb-4">{testimonial.category}</span>
                                    <h3 className="text-2xl font-bold text-dark-text mb-4">{testimonial.title}</h3>
                                    <blockquote className="text-lg text-dark-text-secondary italic border-l-4 border-primary pl-4 mb-4">
                                        "{testimonial.quote}"
                                    </blockquote>
                                    <p className="font-semibold text-dark-text self-end">- {testimonial.author}</p>
                                    
                                </div>
                                <div className="bg-light-card p-8">
                                    <div className="grid grid-cols-2 gap-6">
                                        {testimonial.metrics.map(metric => (
                                            <div key={metric.label} className="bg-white p-4 rounded-lg border border-light-border text-center">
                                                <p className="text-3xl font-bold text-primary">{metric.value}</p>
                                                <p className="text-sm text-dark-text-secondary capitalize">{metric.label}</p>
                                                <p className="text-xs text-gray-400 uppercase">{metric.sub}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Student Success */}
                <div className="mt-20 bg-primary/90 text-white p-8 md:p-12 rounded-xl shadow-xl">
                    <h3 className="text-2xl font-bold text-center mb-6">Student Success Stories</h3>
                    <ul className="space-y-3 max-w-4xl mx-auto">
                        {studentSuccessStories.map((story, i) => (
                           <li key={i} className="bg-white/10 p-4 rounded-md flex items-start">
                               <TrendingUpIcon className="w-6 h-6 text-secondary mr-4 mt-1 flex-shrink-0" />
                               <p>{story}</p>
                           </li>
                        ))}
                    </ul>
                </div>

                {/* ROI Stats */}
                 <div className="mt-20">
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
                        {roiStats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center p-4">
                                <span className="text-5xl font-extrabold text-primary mb-2">{stat.value}</span>
                                <span className="text-center text-sm font-semibold text-dark-text-secondary">{stat.label}</span>
                            </div>
                        ))}
                     </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;