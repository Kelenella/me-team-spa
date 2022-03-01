const getAllCards = (state) => state.cards.allCards;
const getCardsById = (state) => state.cards.cardsById;
const getLoader = (state) => state.cards.loader;
const getCardsError = (state) => state.cards.error;

export { getAllCards, getCardsById, getLoader, getCardsError };
