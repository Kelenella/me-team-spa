import { useState, useEffect } from "react";
import FilterBar from "../../components/FilterBar";
import CardsGallery from "../../components/CardsGallery";
import getAllCardsAPI from "../../services/photosAPI";
import s from "./MainPage.module.css";

export default function MainPage() {
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getAllCardsAPI(cards).then((cards) => {
      setCards(() => [...cards]);
    });
  }, []);

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const getVisibleCard = () => {
    const cardFilter = filter.toLowerCase();

    return cards.filter((card) =>
      card.title.toLowerCase().includes(cardFilter)
    );
  };

  // const addToFavorite = (filterId) => {
  //   setCards(cards.filter((card) => card.id !== filterId));
  // };

  return (
    <>
      <div className={s.wrapper}>
        <FilterBar value={filter} onChange={changeFilter} />
      </div>

      <CardsGallery
        cards={cards}
        setCards={setCards}
        filter={getVisibleCard()}
      />
    </>
  );
}
