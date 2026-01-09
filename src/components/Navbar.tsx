
import Link from 'next/link';

interface NavbarProps {
    logo: string;
    links: string[];
}

export default function Navbar({ logo, links }: NavbarProps) {
    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-neutral-100">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-black tracking-tighter italic">
                    {logo}.
                </Link>

                {/* Desktop Links */}
                <ul className="hidden lg:flex items-center gap-10">
                    {links.map((link) => (
                        <li key={link}>
                            <Link
                                href="#"
                                className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-800 hover:text-neutral-400 transition-colors"
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-6">
                    <button className="text-neutral-800">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <button className="text-neutral-800 lg:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                    <button className="hidden lg:block text-neutral-800">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
