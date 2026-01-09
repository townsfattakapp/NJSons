export interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
}

export interface Section {
  id: string;
  title: string;
  items: Product[];
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  content: string;
  image: string;
  date: string;
  location: string;
}

export interface FooterLink {
  title: string;
  items: string[];
}

export interface StoreInfo {
  name: string;
  address: string;
  phone: string;
  hours: string;
}

export interface SiteData {
  navigation: {
    logo: string;
    links: string[];
  };
  sections: Section[];
  reviews: Review[];
  footer: {
    storeInfo: StoreInfo;
    links: FooterLink[];
  };
}
