'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { landingPageSchema } from '@/constants/landingSchema';

export default function GaloirNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const { announcement } = landingPageSchema;
    const menuItems = landingPageSchema.header.menu;

    // Lock scroll when overlay is open
    useEffect(() => {
        if (isMenuOpen || isSearchOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen, isSearchOpen]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            console.log('Searching for:', searchQuery);
            // Implement actual search logic here
            setIsSearchOpen(false);
        }
    };

    return (
        <header className="w-full relative z-[100]">
            {/* Search Overlay */}
            {isSearchOpen && (
                <div className="fixed inset-0 z-[110] bg-white flex flex-col items-center pt-20 px-4 transition-all duration-300">
                    <button
                        onClick={() => setIsSearchOpen(false)}
                        className="absolute top-8 right-8 text-neutral-400 hover:text-neutral-900 transition-colors p-2"
                        aria-label="Close search"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="w-full max-w-2xl flex flex-col items-center">
                        <h2 className="text-[10px] font-black tracking-[0.5em] text-[#C5A059] mb-12 uppercase">What are you looking for?</h2>
                        <form onSubmit={handleSearch} className="w-full relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search our collection..."
                                className="w-full border-b border-neutral-200 py-6 px-2 text-3xl md:text-5xl font-light focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-neutral-100 italic"
                                autoFocus
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-[#C5A059] transition-colors p-2"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </form>
                        <div className="mt-12 flex flex-wrap justify-center gap-4">
                            {['Lehenga', 'Saree', 'Coord Sets', 'New Arrivals'].map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => setSearchQuery(tag)}
                                    className="px-6 py-2 border border-neutral-100 rounded-full text-[11px] font-bold tracking-widest text-neutral-500 hover:border-[#C5A059] hover:text-[#C5A059] transition-all"
                                >
                                    {tag.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Side Drawer Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[110] flex">
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    <div className="relative w-[340px]  h-full bg-white shadow-2xl flex flex-col p-8 transition-transform duration-500 overflow-hidden">
                        {/* Drawer Header */}
                        <div className="flex justify-between items-center mb-16">
                            <button className="flex items-center gap-3 text-[10px] font-black text-neutral-900 tracking-[0.2em] group">
                                <span className="w-6 h-4 bg-neutral-100 flex items-center justify-center text-[8px] rounded-sm">IN</span>
                                INDIA  (INR ₹)
                                <svg className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="text-neutral-400 hover:text-neutral-950 transition-colors p-2"
                            >
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Menu Content */}
                        <div className="flex flex-col gap-10 overflow-y-auto overflow-x-hidden pb-20 ">
                            {/* Mobile Search/User Actions (Visible < 500px) */}
                            <div className="min-[501px]:hidden flex flex-col gap-6 mb-4">
                                <button
                                    onClick={() => { setIsMenuOpen(false); setIsSearchOpen(true); }}
                                    className="flex items-center gap-4 text-neutral-800"
                                >
                                    <svg className="w-5 h-5 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <span className="text-[12px] font-black tracking-widest">SEARCH COLLECTION</span>
                                </button>
                                <div className="flex items-center gap-8 border-t border-neutral-50 pt-6">
                                    <button className="relative text-neutral-800">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#C5A059] text-white text-[8px] flex items-center justify-center rounded-full font-bold">1</span>
                                    </button>
                                    <button className="text-neutral-800">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </button>
                                    <button className="text-neutral-800 relative">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                        <span className="absolute -top-2 -right-2 w-4 h-4 bg-neutral-900 text-[8px] flex items-center justify-center rounded-full font-black text-white border-2 border-white">0</span>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-[10px] font-black text-[#C5A059] tracking-[0.5em] uppercase mb-10 border-b border-neutral-50 pb-3">
                                    NAVIGATE
                                </h4>
                                <ul className="flex flex-col gap-6">
                                    {menuItems.map((item) => (
                                        <li key={item}>
                                            <Link
                                                href={`/category/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="block text-xl md:text-2xl font-light tracking-[0.02em] text-neutral-800 hover:text-[#C5A059] transform hover:translate-x-3 transition-all duration-300 uppercase"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8 pt-10 border-t border-neutral-100 flex flex-col gap-6">
                                <Link href="#" className="text-[12px] font-bold tracking-[0.2em] text-neutral-400 hover:text-black transition-colors">MY ACCOUNT</Link>
                                <Link href="#" className="text-[12px] font-bold tracking-[0.2em] text-neutral-400 hover:text-black transition-colors">TRACK ORDER</Link>
                                <Link href="#" className="text-[12px] font-bold tracking-[0.2em] text-neutral-400 hover:text-black transition-colors">STORE LOCATOR</Link>
                            </div>
                        </div>

                        {/* Social Links in Drawer */}
                        <div className="absolute bottom-10 left-8 right-8 flex justify-between items-center bg-neutral-50 p-4 rounded-lg">
                            <span className="text-[9px] font-black tracking-widest text-[#C5A059]">FOLLOW US</span>
                            <div className="flex gap-4">
                                {['IG', 'FB', 'WA'].map(social => (
                                    <span key={social} className="text-[10px] font-black cursor-pointer hover:text-[#C5A059] transition-colors">{social}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Announcement Bar */}
            <div className="w-full bg-[#C5A059] py-2 relative z-[100]">
                <p className="text-[9px] md:text-[10px] font-black text-white text-center tracking-[0.5em] uppercase px-4">
                    {announcement}
                </p>
            </div>

            {/* Main Header */}
            <nav className="w-full bg-white border-b border-neutral-100 sticky top-0 z-[90]">
                <div className="container h-20 mx-auto px-4 grid grid-cols-2 min-[501px]:grid-cols-3 items-center">

                    {/* Left: Menu Toggle */}
                    <div className="flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="text-neutral-900 hover:text-[#C5A059] transition-colors flex items-center gap-4 group"
                        >
                            <div className="flex flex-col gap-1.5 p-1">
                                <span className="w-6 h-[1.5px] bg-black group-hover:w-8 transition-all"></span>
                                <span className="w-8 h-[1.5px] bg-black group-hover:w-6 transition-all"></span>
                                <span className="w-5 h-[1.5px] bg-black group-hover:w-8 transition-all"></span>
                            </div>
                            <span className="hidden lg:block text-[10px] font-black tracking-[0.3em] group-hover:translate-x-1 transition-transform">EXPLORE</span>
                        </button>
                    </div>

                    {/* Center: Logo */}
                    <div className="flex justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-[501px]:relative min-[501px]:left-0 min-[501px]:top-0 min-[501px]:translate-x-0 min-[501px]:translate-y-0">

                        <div className="  w-44 h-20  transition-transform group-hover:scale-[1.02] duration-500">
                            <Image
                                src="/njsons-logo-1.png"
                                alt="NJ SONS"
                                fill
                                className="object-contain h-full w-full"
                                priority
                            />
                        </div>

                    </div>

                    {/* Right: Icons - Hidden below 500px */}
                    <div className="hidden min-[501px]:flex items-center justify-end gap-6 md:gap-10">
                        {/* Search */}
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="flex items-center gap-3 group"
                        >
                            <svg className="w-5 h-5 text-neutral-800 group-hover:text-[#C5A059] transition-all duration-300 transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span className="hidden md:block text-[10px] font-black tracking-[0.2em] text-neutral-800 group-hover:text-[#C5A059] transition-colors">SEARCH</span>
                        </button>

                        {/* Wishlist */}
                        <button className="hidden sm:block text-neutral-800 hover:text-[#C5A059] transition-all transform hover:-translate-y-0.5">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                        {/* User */}
                        <button className="relative text-neutral-800">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#2D344B] text-white text-[8px] flex items-center justify-center rounded-full font-bold">1</span>
                        </button>
                        {/* Cart */}
                        <button className="text-neutral-800 hover:text-[#C5A059] transition-all transform hover:-translate-y-0.5 relative group">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span className="absolute -top-2 -right-2 w-4 h-4 bg-neutral-900 group-hover:bg-[#C5A059] text-[8px] flex items-center justify-center rounded-full font-black text-white transition-colors border-2 border-white">0</span>
                        </button>
                    </div>

                </div>
            </nav>
        </header>

    );
}
