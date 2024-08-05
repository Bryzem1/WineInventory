// Define the WineList type to match the backend model
export interface WineList {
  id: number;
  name: string;
  createdAt: string;
  link: string;
  //   wines: Wine[]; // List of wines associated with the WineList
}

// Define the Wine type to match the backend model
export type Wine = {
  id: number;
  name: string;
  vintage: string;
  price: number;
  quantity: number;
  origin: string;
  winelist_id: number; // Foreign key linking to the WineList model
};
