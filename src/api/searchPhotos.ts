import axios from "axios";

export const searchPhotos = async (item: string) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
      params: {
        query: item,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};