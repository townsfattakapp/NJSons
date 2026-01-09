
import GaloirNavbar from "@/components/GaloirNavbar";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import CategoryNav from "@/components/CategoryNav";
import CollectionGrid from "@/components/CollectionGrid";
import VideoBanner from "@/components/VideoBanner";
import ReviewGrid from "@/components/ReviewGrid";
import Footer from "@/components/Footer";
import { siteData } from "@/constants/staticData";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#C5A059] selection:text-white">
      <GaloirNavbar />

      <HeroSection />


      <ProductGrid />

      <VideoBanner />

      <CollectionGrid />

      <div className="bg-white py-10">
        <ReviewGrid reviews={siteData.reviews} />
      </div>

      {/* Keeping original footer for complete page structure */}
      <Footer links={siteData.footer.links} />
    </main>
  );
}
