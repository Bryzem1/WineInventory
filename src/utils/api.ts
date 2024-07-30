// const API_URL = process.env.REACT_APP_API_URL;

export const fetchWineList = async (id: string) => {
    const response = await fetch(`TODO/wine-list/${id}`);
    return response.json();
};