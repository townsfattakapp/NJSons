
import { landingPageSchema } from "@/constants/landingSchema";

export default function CollectionGrid() {
    const { collections } = landingPageSchema;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-black text-center mb-16 uppercase tracking-[0.3em] text-[#1D2B4F]">
                    SHOP BY COLLECTION
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {collections.map((col, index) => (
                        <div
                            key={col.id}
                            className={`group relative overflow-hidden cursor-pointer ${index % 3 === 0 ? "md:col-span-1" : ""
                                }`}
                        >
                            <div className={`aspect-[4/5] md:aspect-[16/9] w-full ${col.image} transition-transform duration-700 group-hover:scale-105`}>
                                {/* Image Placeholder */}
                                <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
                                    <span className="text-neutral-300 text-[100px] font-black opacity-10">COLLECTION</span>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                            <div className="absolute bottom-10 left-10">
                                <h3 className="text-xl md:text-2xl font-black text-white tracking-widest uppercase mb-4">
                                    {col.title}
                                </h3>
                                <button className="text-white text-[10px] font-bold tracking-[0.3em] uppercase border-b border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-all">
                                    EXPLORE NOW
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
