
import { landingPageSchema } from "@/constants/landingSchema";

export default function VideoBanner() {
    const { videoBanner } = landingPageSchema;

    return (
        <section className="relative h-[600px] md:h-[800px] w-full overflow-hidden">
            {/* Video Placeholder */}
            <div className={`absolute inset-0 ${videoBanner.placeholder}`}>
                <div className="w-full h-full opacity-60 bg-neutral-900 border-y border-neutral-800 flex items-center justify-center">
                    <span className="text-white/10 text-[150px] font-black italic tracking-tighter">PREMIUM</span>
                </div>
            </div>

            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-[0.4em] uppercase mb-6 drop-shadow-2xl">
                    {videoBanner.title}
                </h2>
                <p className="text-sm md:text-lg font-medium text-white/80 tracking-[0.5em] uppercase mb-10">
                    {videoBanner.subtitle}
                </p>
                <button className="px-12 py-4 bg-white text-neutral-900 text-xs font-black tracking-[0.3em] uppercase hover:bg-[#C5A059] hover:text-white transition-all duration-300">
                    DISCOVER COLLECTION
                </button>
            </div>

            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
        </section>
    );
}
