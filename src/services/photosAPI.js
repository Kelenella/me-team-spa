import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/photos";

const getAllCardsAPI = async () => {
  try {
    const data = await axios
      .get(axios.defaults.baseURL)
      .then((response) => response.data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default getAllCardsAPI;
