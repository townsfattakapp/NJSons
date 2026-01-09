export const landingPageSchema = {
  announcement: "FREE SHIPPING",
  header: {
    logo: "NJ SONS",
    menu: ["LEHENGA", "SAREES", "STITCHED SUIT", "INDO WESTERN"],
    rightIcons: [
      { id: "search", label: "SEARCH" },
      { id: "wishlist" },
      { id: "user", badge: 1 },
      { id: "cart" },
    ],
  },
  hero: {
    title: "NEW ARRIVALS",
    cta: "VIEW ALL",
  },
  products: [
    {
      id: "memiza",
      name: '"MEMIZA" - THREE PIECE SET',
      price: "Rs. 3,999.00",
      image_placeholder: "aspect-[3/4] bg-neutral-200",
    },
    {
      id: "sarfarosh",
      name: '"SARFAROSH" - THREE PIECE SET',
      price: "Rs. 4,499.00",
      image_placeholder: "aspect-[3/4] bg-neutral-200",
    },
    {
      id: "kimah",
      name: '"KIMAH" - THREE PIECE SET',
      price: "Rs. 4,999.00",
      image_placeholder: "aspect-[3/4] bg-neutral-200",
    },
    {
      id: "swasha",
      name: '"SWASHA" - VELVET THREE PIECE SET',
      price: "Rs. 3,999.00",
      image_placeholder: "aspect-[3/4] bg-neutral-200",
    },
  ],
  collections: [
    { id: 1, title: "WEDDING LUXE", image: "bg-neutral-100" },
    { id: 2, title: "VELVET COLLECTION", image: "bg-neutral-200" },
    { id: 3, title: "NEW WESTERN LAUNCH", image: "bg-neutral-300" },
    { id: 4, title: "ON SALE", image: "bg-neutral-400" },
  ],
  videoBanner: {
    title: "LUXE",
    subtitle: "A NEW ERA OF ELEGANCE",
    placeholder: "bg-neutral-900",
  },
  newsletter: {
    title: "FOR MORE UPDATES",
    placeholder: "ENTER YOUR EMAIL",
  },
};
