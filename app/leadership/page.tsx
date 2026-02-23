import Header from "../components/Header";
import Footer from "../components/Footer";
import { Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

const leaders = [
    {
        name: "Kyle Hartunian",
        role: "President",
        image: "/images/kyle.jpg",
        instagram: "_kyl3_h",
        linkedin: "https://www.linkedin.com/in/kyle-hartunian"
    },
    {
        name: "Natasha Sidki",
        role: "Lead Media Director",
        image: "/images/natasha.jpg",
        linkedin: "https://www.linkedin.com/in/natasha-sidki"
    },
    {
        name: "Nolan Colton",
        role: "Media Director",
        image: "/images/nolan.png",
        instagram: "ntpinjune"
    },
    {
        name: "Luise Haller",
        role: "Lead Secretary",
        image: "/images/luise.jpg",
        linkedin: "https://www.linkedin.com/in/luise-haller-8414bb327/"
    },
    {
        name: "Ashr",
        role: "Lead Treasurer",
        image: "/images/ashr.jpg",
        instagram: "skyoungsten"
    },
    {
        name: "Danielle Mutuc",
        role: "Secretary",
        image: "/images/danielle.jpg",
        instagram: "danielle111111111111",
        linkedin: "https://www.linkedin.com/in/danielle-mutuc-a5230b311"
    }
];

export default function LeadershipPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">
            <Header />

            <div className="max-w-7xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-4">Our Leadership</h1>
                <p className="text-gray-400 max-w-3xl mb-16">
                    Meet the dedicated team leading the Foothill Engineering Club. Our leaders are passionate about engineering and committed to fostering a collaborative and innovative environment for all members.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {leaders.map((leader, index) => (
                        <div key={index} className="bg-[#171717] p-8 rounded-lg border border-[#262626] flex flex-col items-center text-center">
                            <div className="w-32 h-32 rounded-lg bg-[#262626] mb-6 overflow-hidden relative">
                                <Image src={leader.image} alt={leader.name} fill className="object-cover" />
                            </div>

                            <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                            <p className="text-gray-400 text-sm mb-6">{leader.role}</p>

                            <div className="flex gap-4 mt-auto">
                                {leader.instagram && (
                                    <a href={`https://instagram.com/${leader.instagram}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                )}
                                {leader.linkedin && (
                                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
