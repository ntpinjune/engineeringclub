"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function About() {
    const [activeTab, setActiveTab] = useState('About Us');

    return (
        <section className="py-16 px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Quick Links</h2>

            <div className="bg-[#171717] rounded-lg border border-[#262626] overflow-hidden">
                <div className="flex border-b border-[#262626]">
                    <button
                        onClick={() => setActiveTab('About Us')}
                        className={`flex-1 py-3 text-sm font-medium transition-colors relative ${activeTab === 'About Us' ? 'text-[#3b82f6]' : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        About Us
                        {activeTab === 'About Us' && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3b82f6]" />
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('Join Us')}
                        className={`flex-1 py-3 text-sm font-medium transition-colors relative ${activeTab === 'Join Us' ? 'text-[#3b82f6]' : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        Join Us
                        {activeTab === 'Join Us' && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3b82f6]" />
                        )}
                    </button>
                </div>

                <div className="p-8">
                    {activeTab === 'About Us' ? (
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">About Foothill Engineering Club</h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                The Foothill Engineering Club is a vibrant community of students passionate about engineering, innovation, and problem-solving. We provide a platform for members to collaborate on exciting projects, enhance their skills through workshops, and connect with peers and industry professionals. Our goal is to foster a supportive and stimulating environment where future engineers can thrive and contribute to meaningful advancements.
                            </p>
                            <ul className="text-gray-400 text-sm space-y-2 mb-8 list-disc list-inside">
                                <li>Hands-on learning experiences</li>
                                <li>Networking opportunities</li>
                                <li>Skill development workshops</li>
                                <li>Participation in competitions</li>
                            </ul>
                            <Link href="/about" className="inline-block bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm px-4 py-2 rounded transition-colors">
                                Learn More About Us
                            </Link>
                        </div>
                    ) : (
                        <div className="text-center py-10 text-gray-400">
                            <p className="mb-4">Ready to innovate with us?</p>
                            <Link href="/contact" className="inline-block bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm px-4 py-2 rounded transition-colors">
                                Go to Contact Form
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
