import Image from 'next/image';

const projects = [
    {
        title: "CNC Router",
        description: "A computer-controlled cutting machine built from scratch, capable of precision woodworking and metalworking.",
        image: "/images/cnc-router.png",
        buttonText: "View Details"
    },
    {
        title: "RC GoKart",
        description: "A high-speed electric go-kart designed for competitive racing, featuring custom chassis design and powertrain optimization.",
        image: "/images/rc-gokart.png",
        buttonText: "Learn More"
    },
    {
        title: "RC Plane",
        description: "An advanced radio-controlled aircraft, showcasing principles of aerodynamics and lightweight construction.",
        image: "/images/rc-plane.png",
        buttonText: "See Project"
    }
];

export default function Projects() {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-[#171717] rounded-lg overflow-hidden border border-[#262626] flex flex-col">
                        <div className="h-48 bg-[#262626] relative">
                            {/* Placeholder for image, will use next/image when assets are ready */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                                {/* If image fails to load or is missing, this shows. But we will generate images. */}
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    unoptimized // For now, until we have real images or configured loader
                                />
                            </div>
                        </div>
                        <div className="p-6 flex flex-col h-full">
                            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                                {project.description}
                            </p>
                            <button className="bg-[#262626] hover:bg-[#333] text-white text-xs px-4 py-2 rounded transition-colors border border-[#333] self-start">
                                {project.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
