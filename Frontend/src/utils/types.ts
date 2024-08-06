export interface WineList {
    id: number;
    name: string;
    createdAt: string;
    link: string;

    // Not needed for now as we are using id to refetch the specifics wines for a WineList.
    // wines: Wine[];
}

export type Wine = {
    id: number;
    name: string;
    vintage: string;
    price: number;
    quantity: number;
    origin: string;

    // TODO: If we insist on using WineList id to refetch wines, we might not need this field.
    winelist_id: number; // Foreign key linking to the WineList model
};
