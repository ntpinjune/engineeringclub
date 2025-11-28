import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { Users, Lightbulb, Settings } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">
            <Header />

            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl font-bold mb-6">About Our Club</h1>
                    <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
                        The Foothill Engineering Club is dedicated to fostering innovation, collaboration, and technical excellence. We provide a platform for hands-on projects, workshops, and networking, empowering the next generation of engineers.
                    </p>
                </div>

                {/* Mission Section */}
                <section className="flex flex-col md:flex-row items-center gap-12 mb-24">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            To inspire and empower students by providing a supportive community, valuable resources, and opportunities to explore and excel in various engineering disciplines. We aim to bridge the gap between academic theory and real-world application.
                        </p>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-[#171717]">
                            {/* Placeholder for Mission Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                                <span className="text-lg">Mission Image (Students Working)</span>
                            </div>
                            {/* <Image src="/images/mission-students.png" alt="Students working together" fill className="object-cover" /> */}
                        </div>
                    </div>
                </section>

                {/* Core Values Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Community */}
                        <div className="bg-[#171717] p-10 rounded-lg border border-[#262626] flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-[#262626] flex items-center justify-center mb-6 text-[#3b82f6]">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Community</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We believe in the power of collaboration and mutual support, fostering a strong community where members learn and grow together.
                            </p>
                        </div>

                        {/* Innovation */}
                        <div className="bg-[#171717] p-10 rounded-lg border border-[#262626] flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-[#262626] flex items-center justify-center mb-6 text-[#3b82f6]">
                                <Lightbulb className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Innovation</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We encourage creative thinking and problem-solving, designing projects to challenge members and develop innovative solutions.
                            </p>
                        </div>

                        {/* Excellence */}
                        <div className="bg-[#171717] p-10 rounded-lg border border-[#262626] flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-[#262626] flex items-center justify-center mb-6 text-[#3b82f6]">
                                <Settings className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Excellence</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We strive for excellence in all our endeavors, providing mentorship and resources to help members develop their technical skills.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
