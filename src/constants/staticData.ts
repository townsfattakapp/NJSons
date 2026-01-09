import { SiteData } from "@/types";

export const siteData: SiteData = {
  navigation: {
    logo: "NJ SONS",
    links: [
      "CO-ORD SETS",
      "SAREES",
      "SUITS",
      "WESTERN",
      "JEWELLERY",
      "REVIEWS",
    ],
  },
  sections: [
    {
      id: "co-ord-sets",
      title: "CO-ORD SETS",
      items: [
        {
          id: 1,
          name: "Floral Print Co-ord Set",
          price: "₹ 2,499",
          rating: 5,
          image: "/p1.jpg",
        },
        {
          id: 2,
          name: "Solid Silk Co-ord Set",
          price: "₹ 3,299",
          rating: 5,
          image: "/p2.jpg",
        },
        {
          id: 3,
          name: "Ethnic Print Set",
          price: "₹ 2,799",
          rating: 4,
          image: "/p3.jpg",
        },
        {
          id: 4,
          name: "Summer Breeze Set",
          price: "₹ 1,999",
          rating: 5,
          image: "/p4.jpg",
        },
      ],
    },
    {
      id: "drape-sarees",
      title: "DRAPE SAREES",
      items: [
        {
          id: 5,
          name: "Ready-to-wear Silk Saree",
          price: "₹ 4,999",
          rating: 5,
          image: "/p5.jpg",
        },
        {
          id: 6,
          name: "Georgette Drape Saree",
          price: "₹ 3,899",
          rating: 5,
          image: "/p6.jpg",
        },
        {
          id: 7,
          name: "Party Wear Saree",
          price: "₹ 5,499",
          rating: 4,
          image: "/p7.jpg",
        },
        {
          id: 8,
          name: "Embroidered Drape",
          price: "₹ 6,299",
          rating: 5,
          image: "/p8.jpg",
        },
      ],
    },
    {
      id: "suit-sets",
      title: "PREMIUM SUIT SETS",
      items: [
        {
          id: 9,
          name: "Anarkali Suit Set",
          price: "₹ 4,499",
          rating: 5,
          image: "/p9.jpg",
        },
        {
          id: 10,
          name: "Straight Cut Salwar",
          price: "₹ 3,299",
          rating: 5,
          image: "/p10.jpg",
        },
        {
          id: 11,
          name: "Palazzo Suit Set",
          price: "₹ 3,799",
          rating: 4,
          image: "/p11.jpg",
        },
        {
          id: 12,
          name: "Sharara Suit Set",
          price: "₹ 4,999",
          rating: 5,
          image: "/p12.jpg",
        },
      ],
    },
    {
      id: "western-wear",
      title: "WESTERN WEAR",
      items: [
        {
          id: 13,
          name: "Maxi Summer Dress",
          price: "₹ 2,499",
          rating: 5,
          image: "/p13.jpg",
        },
        {
          id: 14,
          name: "Bodycon Party Dress",
          price: "₹ 2,999",
          rating: 5,
          image: "/p14.jpg",
        },
        {
          id: 15,
          name: "Linen Shirt Dress",
          price: "₹ 1,899",
          rating: 4,
          image: "/p15.jpg",
        },
        {
          id: 16,
          name: "Denim Jacket Style",
          price: "₹ 2,299",
          rating: 5,
          image: "/p16.jpg",
        },
      ],
    },
  ],
  reviews: [
    {
      id: 1,
      author: "Vanshika Dhillon",
      rating: 5,
      content:
        "The quality of the co-ord set is amazing. The fabric is very breathable and the print is exactly as shown in the picture.",
      image: "/r1.jpg",
      date: "2 days ago",
      location: "Ambala",
    },
    {
      id: 2,
      author: "Mehak",
      rating: 5,
      content:
        "Loved the drape saree! It's so easy to wear and looks very elegant. Perfect for wedding functions.",
      image: "/r2.jpg",
      date: "1 week ago",
      location: "Chandigarh",
    },
    {
      id: 3,
      author: "Priya Sharma",
      rating: 5,
      content:
        "The suit set fits me perfectly. Great craftsmanship on the embroidery. Will definitely buy more.",
      image: "/r3.jpg",
      date: "3 days ago",
      location: "Ludhiana",
    },
    {
      id: 4,
      author: "Ananya Gupta",
      rating: 4,
      content:
        "Nice collection. The western wear is very trendy and affordable.",
      image: "/r4.jpg",
      date: "5 days ago",
      location: "Delhi",
    },
    {
      id: 5,
      author: "Simran Kaur",
      rating: 5,
      content:
        "Highly impressed with the jewelry collection. It adds a great touch to the outfits.",
      image: "/r5.jpg",
      date: "2 weeks ago",
      location: "Patiala",
    },
    {
      id: 6,
      author: "Divya Verma",
      rating: 5,
      content:
        "Fast shipping and excellent customer service. The dress arrived in perfect condition.",
      image: "/r6.jpg",
      date: "1 day ago",
      location: "Panchkula",
    },
  ],
  footer: {
    storeInfo: {
      name: "NJ SONS",
      address: "Ambala-Chandigarh Hwy, Adarsh Nagar, Zirakpur, Punjab 140603",
      phone: "+91 91151-51000",
      hours: "Open daily: 10:30 AM - 9:00 PM",
    },
    links: [
      {
        title: "Customer Care",
        items: [
          "Shipping Policy",
          "Exchange & Returns",
          "Contact Us",
          "Terms & Conditions",
        ],
      },
      {
        title: "Follow Us",
        items: ["Instagram", "Facebook", "WhatsApp", "YouTube"],
      },
    ],
  },
};
