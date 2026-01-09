
import { Review } from "@/types";
import ReviewCard from "./ReviewCard";

interface ReviewGridProps {
    reviews: Review[];
}

export default function ReviewGrid({ reviews }: ReviewGridProps) {
    return (
        <div className="py-16 bg-neutral-50/50">
            <div className="container mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold text-center mb-10 uppercase tracking-widest text-neutral-800">
                    Customer Stories
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
                <div className="mt-12 flex justify-center">
                    <button className="px-10 py-3 border-2 border-neutral-900 text-neutral-900 font-bold uppercase tracking-widest text-xs hover:bg-neutral-900 hover:text-white transition-colors">
                        Load More
                    </button>
                </div>
            </div>
        </div>
    );
}
