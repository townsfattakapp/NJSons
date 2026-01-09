
import { landingPageSchema } from '@/constants/landingSchema';

export default function ProductGrid() {
    const { products } = landingPageSchema;

    return (
        <section className="pb-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="flex flex-col items-center group cursor-pointer">
                            <div className="relative w-full aspect-[3/4] bg-neutral-100 mb-6 overflow-hidden">
                                {/* ARCHED MIRROR EFFECT PLACEHOLDER */}
                                <div className="absolute inset-0 bg-neutral-200 m-4 rounded-t-full border border-neutral-300" />
                                {/* In a real app, the image would be here with an object-cover and potentially a mask */}
                            </div>
                            <div className="text-center">
                                <h3 className="text-[12px] font-medium tracking-[0.15em] text-neutral-800 mb-2 uppercase">
                                    {product.name}
                                </h3>
                                <p className="text-[11px] font-normal tracking-[0.05em] text-neutral-500">
                                    {product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
