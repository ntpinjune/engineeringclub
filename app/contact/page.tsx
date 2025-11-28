"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Twitter, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
        }
    };

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">
            <Header />

            <div className="max-w-3xl mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                <p className="text-gray-400 mb-12">
                    We&apos;d love to hear from you! Whether you have questions about our club, projects, or events, feel free to reach out using the form below or connect with us on social media.
                </p>

                <div className="mb-12">
                    <a href="https://linktr.ee/fh.engineeringclub" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-[#2563eb] transition-colors font-medium">
                        <span>Check out our Linktree</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                    </a>
                </div>

                <div className="bg-[#171717] p-8 rounded-lg border border-[#262626] text-left mb-12">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Enter your name"
                                className="w-full bg-[#0a0a0a] border border-[#262626] rounded px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="Enter your email"
                                className="w-full bg-[#0a0a0a] border border-[#262626] rounded px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                placeholder="Enter the subject"
                                className="w-full bg-[#0a0a0a] border border-[#262626] rounded px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                placeholder="Enter your message"
                                className="w-full bg-[#0a0a0a] border border-[#262626] rounded px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className={`w-full font-medium py-3 rounded transition-colors ${status === 'sending'
                                ? 'bg-gray-600 cursor-not-allowed'
                                : 'bg-[#3b82f6] hover:bg-[#2563eb] text-white'
                                }`}
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && (
                            <p className="text-green-500 text-center mt-4">Message sent successfully!</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-500 text-center mt-4">Failed to send message. Please try again.</p>
                        )}
                    </form>
                </div>

            </div>

            <Footer />
        </main>
    );
}
