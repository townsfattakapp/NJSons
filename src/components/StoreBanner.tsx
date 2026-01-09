
import { StoreInfo } from "@/types";
import StarRating from "./StarRating";

interface StoreBannerProps {
    info: StoreInfo;
}

export default function StoreBanner({ info }: StoreBannerProps) {
    return (
        <div className="relative h-[400px] md:h-[500px] w-full mt-10">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-neutral-800">
                <div className="w-full h-full opacity-50 bg-[url('/store-bg.jpg')] bg-cover bg-center" />
            </div>

            {/* Address Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-20 md:translate-x-0 w-[90%] md:w-[400px] bg-white p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-neutral-900 mb-2 uppercase tracking-wide">{info.name}</h3>
                <div className="mb-4">
                    <StarRating rating={5} />
                    <p className="text-xs text-neutral-500 mt-1 uppercase font-semibold">GURGAON STORE</p>
                </div>
                <div className="space-y-4 text-xs tracking-wide leading-relaxed text-neutral-700">
                    <p>
                        <span className="font-bold block mb-1">VISIT US:</span>
                        {info.address}
                    </p>
                    <div className="flex flex-col gap-1">
                        <p><span className="font-bold">CALL:</span> {info.phone}</p>
                        <p><span className="font-bold">HOURS:</span> {info.hours}</p>
                    </div>
                </div>
                <button className="mt-8 w-full py-4 bg-neutral-900 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-neutral-800 transition-colors">
                    Get Directions
                </button>
            </div>
        </div>
    );
}
