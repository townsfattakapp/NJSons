
import Image from 'next/image';
import { FooterLink } from "@/types";

interface FooterProps {
    links: FooterLink[];
}

export default function Footer({ links }: FooterProps) {
    return (
        <footer className="bg-white pt-20 pb-10 border-t border-neutral-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-2 md:col-span-1">
                        <div className="relative w-40 h-16 mb-6">
                            <Image
                                src="/njsons-logo.png"
                                alt="NJ SONS"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                            Premium ethnic collection for the modern woman. Discover elegance in every drape.
                        </p>
                    </div>
                    {links.map((group) => (
                        <div key={group.title}>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-neutral-400">
                                {group.title}
                            </h4>
                            <ul className="space-y-4">
                                {group.items.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-xs font-semibold text-neutral-800 hover:text-neutral-400 transition-colors tracking-wide uppercase">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-neutral-400">
                            Newsletter
                        </h4>
                        <div className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="EMAIL ADDRESS"
                                className="bg-neutral-50 border-b border-neutral-200 py-3 px-2 text-[10px] uppercase font-bold tracking-widest focus:outline-none focus:border-neutral-900 transition-colors"
                            />
                            <button className="text-[10px] font-black uppercase tracking-[0.2em] text-left hover:text-neutral-500 transition-colors">
                                Subscribe →
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pt-10 border-t border-neutral-50 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                        © 2026 NJ SONS. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest hover:text-neutral-900 transition-colors">Privacy</a>
                        <a href="#" className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest hover:text-neutral-900 transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
