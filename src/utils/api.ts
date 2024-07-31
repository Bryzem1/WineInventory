// const API_URL = process.env.REACT_APP_API_URL;

export const fetchWineList = async (id: string) => {
    const response = await fetch(`TODO1/wine-list/${id}`);
    return response.json();
};

export const fetchWineListList = async () => {
    const response = await fetch(`TODO2/wine-list-list`);
    return response.json();
};