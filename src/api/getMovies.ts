import axios from "axios";

export const getMovies = async () => {
  try {
    const response = await axios.get(
        "http://localhost:8080/movies",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getWatchList = async (id: string) => {
  try{
    const response = await axios.get(`http://localhost:8080/movies/watchList`, {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        user_id: id
      },
    })
    return response.data;
    }
    catch (error) {
    console.error(error);
  }
};
