export interface Room {
  id: string;
  title: string;
  tag: string;
  tagCategory: string;
  description: string;
  price: string;
  rawPrice: number;
  specs: string;
  imageUrl: string;
  rating: number;
  reviewsCount: number;
  bedType: string;
  viewType: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface HeroSearchState {
  tab: 'stay' | 'rates' | 'suites';
  query: string;
  selectedRoom: string;
  priceRange: string;
}
