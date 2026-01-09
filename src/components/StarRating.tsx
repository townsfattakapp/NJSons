
interface StarRatingProps {
    rating: number;
    max?: number;
}

export default function StarRating({ rating, max = 5 }: StarRatingProps) {
    return (
        <div className="flex gap-0.5 text-yellow-400">
            {[...Array(max)].map((_, i) => (
                <span key={i} className={i < rating ? "fill-current" : "text-gray-300"}>
                    ★
                </span>
            ))}
        </div>
    );
}
