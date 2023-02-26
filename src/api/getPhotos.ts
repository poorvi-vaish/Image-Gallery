import axios from "axios";

export const getPhotos = async () => {
  try {
    const response = await axios.get("https://api.unsplash.com/photos/", {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
      params: {
        per_page: 30,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getPhotoDetails = async (id: string) => {
  try{
    const response = await axios.get(`https://api.unsplash.com/photos/${id}`, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    })
    return response.data;
    }
    catch (error) {
    console.error(error);
  }
}
;
