
import { Review } from "@/types";
import StarRating from "./StarRating";

interface ReviewCardProps {
    review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
    return (
        <div className="bg-white border border-neutral-100 rounded-sm overflow-hidden flex flex-col shadow-sm">
            <div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden">
                {/* Placeholder for reviewer image/video */}
                <div className="w-full h-full bg-neutral-800" />
            </div>
            <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <StarRating rating={review.rating} />
                    <span className="text-[10px] text-neutral-400 font-medium uppercase">{review.date}</span>
                </div>
                <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-bold text-neutral-800">{review.author}</h4>
                    <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed italic">
                        "{review.content}"
                    </p>
                </div>
                <div className="pt-2 border-t border-neutral-50 flex items-center justify-between">
                    <span className="text-[10px] text-neutral-500 font-semibold uppercase tracking-wider">{review.location}</span>
                    <button className="text-[10px] text-neutral-800 font-bold underline uppercase tracking-tighter">
                        View Product
                    </button>
                </div>
            </div>
        </div>
    );
}
