'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { landingPageSchema } from '@/constants/landingSchema';

export default function GaloirNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { logo } = landingPageSchema.header;
    const { announcement } = landingPageSchema;

    const menuOptions = [
        "LEHENGA",
        "SAREES",
        "STITCHED SUIT",
        "INDO WESTERN"
    ];

    return (
        <header className="w-full relative">
            {/* Side Drawer Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[100] flex">
                    <div
                        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    <div className="relative w-[320px] h-full bg-white shadow-2xl flex flex-col p-8 transition-transform duration-300">
                        {/* Drawer Header */}
                        <div className="flex justify-between items-center mb-12">
                            <button className="flex items-center gap-2 text-[11px] font-bold text-neutral-800 tracking-widest">
                                INDIA ₹
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <button onClick={() => setIsMenuOpen(false)} className="text-neutral-500 hover:text-neutral-900 transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Menu Content */}
                        <div className="flex flex-col gap-8">
                            <div>
                                <h4 className="text-[10px] font-bold text-[#8B8B4F] tracking-[0.3em] uppercase mb-6">
                                    WOMEN
                                </h4>
                                <ul className="flex flex-col gap-6">
                                    {menuOptions.map((opt) => (
                                        <li key={opt}>
                                            <Link
                                                href="#"
                                                className="text-lg font-medium tracking-[0.1em] text-[#1D2B4F] hover:text-[#8B8B4F] transition-colors uppercase"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {opt}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Background Branding (Subtle) */}
                        <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none select-none">
                            <span className="text-9xl font-black italic -rotate-12 translate-y-10 translate-x-10">
                                NJ
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Announcement Bar */}
            <div className="w-full bg-[#C5A059] py-2">
                <p className="text-[10px] md:text-[11px] font-bold text-white text-center tracking-[0.3em] uppercase">
                    {announcement}
                </p>
            </div>

            {/* Main Header */}
            <nav className="w-full bg-white border-b border-neutral-100 ">
                <div className="container mx-auto px-4 grid grid-cols-3 items-center">

                    {/* Left: Menu Toggle */}
                    <div className="flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="text-neutral-900 hover:text-neutral-500 transition-colors py-4 md:py-6"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16m-16 6h16" />
                            </svg>
                        </button>
                    </div>

                    {/* Center: Logo */}
                    <div className="flex justify-center">
                        <Link href="/">
                            <Image
                                src="/njsons-logo.png"
                                alt="NJ SONS"
                                className=" h-full w-full"
                                priority
                                width={100}
                                height={10}
                            />
                        </Link>
                    </div>

                    {/* Right: Icons */}
                    <div className="flex items-center justify-end gap-3 md:gap-8">
                        {/* Search */}
                        <button className="flex items-center gap-2 group">
                            <svg className="w-5 h-5 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span className="hidden md:block text-[10px] font-bold tracking-widest text-[#2D344B] group-hover:text-neutral-500 transition-colors">SEARCH</span>
                        </button>

                        {/* Wishlist */}
                        <button className="hidden sm:block text-neutral-800">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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
                        <button className="text-neutral-800">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </button>
                    </div>

                </div>
            </nav>
        </header>
    );
}
