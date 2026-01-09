
import { landingPageSchema } from '@/constants/landingSchema';

export default function HeroSection() {
    const { title, cta } = landingPageSchema.hero;

    return (
        <section className="py-20 text-center">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-normal tracking-[0.2em] text-neutral-900 mb-8">
                    {title}
                </h1>
                <button className="px-8 py-2 border border-neutral-300 text-[10px] font-medium tracking-[0.2em] text-neutral-600 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all uppercase">
                    {cta}
                </button>
            </div>
        </section>
    );
}
