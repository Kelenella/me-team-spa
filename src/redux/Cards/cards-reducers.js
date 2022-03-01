import { createReducer, combineReducers } from "@reduxjs/toolkit";

import {
  getAllCardsRequest,
  getAllCardsSuccess,
  getAllCardsError,
  getCardsByIdRequest,
  getCardsByIdSuccess,
  getCardsByIdError,
} from "./cards-actions";

const allCards = createReducer([], {
  [getAllCardsSuccess]: (_, { payload }) => payload,
});

const cardsById = createReducer([], {
  [getCardsByIdSuccess]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
});

const loader = createReducer(false, {
  [getAllCardsRequest]: () => true,
  [getAllCardsSuccess]: () => false,
  [getAllCardsError]: () => false,
  [getCardsByIdRequest]: () => true,
  [getCardsByIdSuccess]: () => false,
  [getCardsByIdError]: () => false,
});

const error = createReducer(null, {
  [getAllCardsRequest]: () => null,
  [getAllCardsSuccess]: () => null,
  [getAllCardsError]: (_, { payload }) => payload,
  [getCardsByIdRequest]: () => null,
  [getCardsByIdSuccess]: () => null,
  [getCardsByIdError]: (_, { payload }) => payload,
});

const cards = combineReducers({ allCards, cardsById, loader, error });

export { cards };
