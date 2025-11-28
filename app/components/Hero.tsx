import Link from 'next/link';

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-24 px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
                Welcome to Our Collaborative Community!
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mb-10">
                Unleash your potential with Foothill Engineering Club – innovate, collaborate, and build the future together.
            </p>
            <Link href="/projects" className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium px-6 py-3 rounded transition-colors">
                Discover Opportunities
            </Link>
        </section>
    );
}
