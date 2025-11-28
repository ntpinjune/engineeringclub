"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path ? "text-white font-medium" : "text-gray-300 hover:text-white";
    };

    return (
        <header className="relative flex items-center justify-between px-8 py-4 bg-[#0a0a0a] text-white sticky top-0 z-50 border-b border-[#262626]">
            <div className="flex items-center gap-2">
                <div className="bg-white text-black p-1 rounded-sm">
                    {/* Simple diamond/logo placeholder */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 12L12 22L22 12L12 2Z" />
                    </svg>
                </div>
                <span className="font-semibold text-lg">Foothill Engineering Club</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm absolute left-1/2 transform -translate-x-1/2">
                <Link href="/" className={`transition-colors ${isActive('/')}`}>Home</Link>
                <Link href="/about" className={`transition-colors ${isActive('/about')}`}>About Us</Link>
                <Link href="/projects" className={`transition-colors ${isActive('/projects')}`}>Projects</Link>
                <Link href="/leadership" className={`transition-colors ${isActive('/leadership')}`}>Leadership</Link>
                <Link href="/contact" className={`transition-colors ${isActive('/contact')}`}>Contact</Link>
            </nav>

            <Link href="/contact" className="bg-[#1f2937] hover:bg-[#374151] text-white text-sm px-4 py-2 rounded transition-colors">
                Join Us
            </Link>
        </header>
    );
}
