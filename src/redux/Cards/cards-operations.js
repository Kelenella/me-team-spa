import { toast } from "react-toastify";
import {
  getAllCardsRequest,
  getAllCardsSuccess,
  getAllCardsError,
  //   getCardsByIdRequest,
  //   getCardsByIdSuccess,
  //   getCardsByIdError,
} from "./cards-actions";
import getAllCardsAPI from "../../services/photosAPI";

const getAllCards = (cards) => async (dispatch) => {
  dispatch(getAllCardsRequest());
  try {
    const response = await getAllCardsAPI();
    dispatch(getAllCardsSuccess(response.data));
    console.log(response.data);
  } catch (error) {
    dispatch(getAllCardsError(error.message));
    toast.error(error.message, {
      position: "top-center",
      autoClose: 2500,
    });
  }
};

const cardsOperations = { getAllCards };

export default cardsOperations;
