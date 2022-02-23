import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/photos";

const getCard = () =>
  axios.get(axios.defaults.baseURL).then((response) => console.log(response));

export default getCard;
