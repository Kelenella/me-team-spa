import { createAction } from "@reduxjs/toolkit";

const getAllCardsRequest = createAction("getAllCardsRequest");
const getAllCardsSuccess = createAction("getAllCardsSuccess");
const getAllCardsError = createAction("getAllCardsError");

const getCardsByIdRequest = createAction("getCardsByIdRequest");
const getCardsByIdSuccess = createAction("getCardsByIdSuccess");
const getCardsByIdError = createAction("getCardsByIdError");

export {
  getAllCardsRequest,
  getAllCardsSuccess,
  getAllCardsError,
  getCardsByIdRequest,
  getCardsByIdSuccess,
  getCardsByIdError,
};
