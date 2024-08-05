// const API_URL = process.env.REACT_APP_API_URL;

export const fetchWineList = async (id: string) => {
  const response = await fetch(`http://127.0.0.1:5000/wine-list/${id}`);
  return response.json();
};

export const fetchWineListList = async () => {
  const response = await fetch(`http://127.0.0.1:5000/winelists`);
  return response.json();
};
