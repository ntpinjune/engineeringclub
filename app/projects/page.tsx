"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

const projects = [
    {
        id: "cnc-router",
        title: "CNC Router",
        description: "A computer-controlled cutting machine built from scratch, capable of precision woodworking and metalworking. This project involves mechanical design, electronics integration, and software configuration to create a versatile manufacturing tool.",
        image: "/images/cnc-router.png"
    },
    {
        id: "rc-gokart",
        title: "RC GoKart",
        description: "A high-speed electric go-kart designed for competitive racing. The team focuses on chassis design, powertrain optimization, and battery management systems to achieve maximum performance and reliability.",
        image: "/images/rc-gokart.png"
    },
    {
        id: "rc-plane",
        title: "RC Plane",
        description: "An advanced radio-controlled aircraft, showcasing principles of aerodynamics and lightweight construction. Students learn about airfoil design, stability analysis, and flight control systems.",
        image: "/images/rc-plane.png"
    },
    {
        id: "robotic-arm",
        title: "Robotic Arm",
        description: "A programmable mechanical arm capable of performing complex tasks with high precision. This project utilizes inverse kinematics, computer vision, and servo control to achieve accurate manipulation of objects.",
        image: "/images/robotic-arm.png"
    }
];

function ProjectsContent() {
    const searchParams = useSearchParams();
    const projectId = searchParams.get("id");
    const selectedProject = projects.find((p) => p.id === projectId) || projects[0];

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
            <p className="text-gray-400 max-w-2xl mb-12">
                Explore the innovative projects developed by our talented members.
            </p>

            <div className="flex flex-col md:flex-row gap-12">
                {/* Sidebar Navigation */}
                <div className="w-full md:w-1/3 flex flex-col gap-2">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            href={`/projects?id=${project.id}`}
                            className={`text-left px-6 py-4 rounded-lg transition-all duration-200 ${selectedProject.id === project.id
                                ? "bg-[#262626] text-white font-medium border-l-4 border-white"
                                : "text-gray-400 hover:text-white hover:bg-[#171717]"
                                }`}
                        >
                            {project.title}
                        </Link>
                    ))}
                </div>

                {/* Project Detail */}
                <div className="w-full md:w-2/3">
                    <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8 bg-[#171717]">
                        {/* Placeholder for Project Image */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                            {/* <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" /> */}
                            <span>{selectedProject.title} Image</span>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                    <p className="text-gray-400 leading-relaxed">
                        {selectedProject.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">
            <Header />
            <Suspense fallback={<div className="text-center py-20">Loading projects...</div>}>
                <ProjectsContent />
            </Suspense>
            <Footer />
        </main>
    );
}
