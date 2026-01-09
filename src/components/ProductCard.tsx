
import { Product } from "@/types";
import StarRating from "./StarRating";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group cursor-pointer flex flex-col gap-3">
            <div className="relative aspect-[3/4] overflow-hidden bg-black">
                {/* Placeholder for image */}
                <div className="w-full h-full bg-neutral-900 transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="flex flex-col gap-1 items-center text-center px-2">
                <h3 className="text-xs md:text-sm font-medium uppercase tracking-tight line-clamp-1">{product.name}</h3>
                <p className="text-sm md:text-base font-bold text-neutral-800">{product.price}</p>
                <StarRating rating={product.rating} />
            </div>
        </div>
    );
}
