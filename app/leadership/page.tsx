import Header from "../components/Header";
import Footer from "../components/Footer";
import { Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

const leaders = [
    {
        name: "Ethan Carter",
        role: "President",
        description: "Ethan leads the club with a focus on innovation and collaboration.",
        image: "/images/ethan.png"
    },
    {
        name: "Sophia Bennett",
        role: "Media Director",
        description: "Sophia manages the club's social media presence and public relations.",
        image: "/images/sophia.png"
    },
    {
        name: "Liam Harper",
        role: "Treasurer",
        description: "Liam manages the club's finances and budget.",
        image: "/images/liam.png"
    },
    {
        name: "Olivia Foster",
        role: "Secretary",
        description: "Olivia handles club communications and administrative tasks.",
        image: "/images/olivia.png"
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
                                {/* Placeholder for Leader Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                                    {/* <Image src={leader.image} alt={leader.name} fill className="object-cover" /> */}
                                    <span>{leader.name}</span>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                            <p className="text-gray-400 text-sm mb-4">{leader.role}</p>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                {leader.description}
                            </p>

                            <div className="flex gap-4 mt-auto">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
