
export default function CategoryNav() {
    const categories = [
        { name: "Indo Western", icon: "👗" },
        { name: "Lehenga", icon: "✨" },
        { name: "Saree", icon: "👘" },
        { name: "Stitched Suit", icon: "👕" },
        { name: "Co-ords", icon: "🧥" },
        { name: "Jewellery", icon: "💍" }
    ];

    return (
        <div className="py-8 bg-white border-b border-neutral-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center gap-4 overflow-x-auto no-scrollbar">
                    {categories.map((cat) => (
                        <button key={cat.name} className="flex flex-col items-center gap-2 min-w-[80px] group">
                            <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center text-xl group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
                                {cat.icon}
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500 group-hover:text-neutral-900">
                                {cat.name}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
