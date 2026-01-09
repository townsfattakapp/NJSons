
import { Section } from "@/types";
import ProductCard from "./ProductCard";

interface CategorySectionProps {
    section: Section;
}

export default function CategorySection({ section }: CategorySectionProps) {
    return (
        <section className="py-12 border-t border-neutral-100 first:border-t-0">
            <div className="container mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold text-center mb-8 uppercase tracking-widest text-neutral-800">
                    {section.title}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
                    {section.items.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
