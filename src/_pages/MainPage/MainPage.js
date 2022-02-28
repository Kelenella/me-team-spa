import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import FilterBar from "../../components/FilterBar";
import CardsGallery from "../../components/CardsData/CardsData";
import getAllCardsAPI from "../../services/photosAPI";
import s from "./MainPage.module.css";

export default function MainPage() {
  const [searchQuery, setSearchQuery] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getAllCardsAPI(cards).then((cards) => {
      setCards(() => [...cards]);
    });
  }, [cards]);

  const handleSubmit = (searchQuery) => {
    setSearchQuery(searchQuery);
  };
  return (
    <>
      <div className={s.wrapper}>
        <NavLink className={s.navLink} to="/me-team-spa">
          Главная
        </NavLink>
        <FilterBar onSubmit={handleSubmit} />
        <NavLink className={s.navLink} to="/favorites">
          Избранное
        </NavLink>
      </div>

      <CardsGallery
        searchQuery={searchQuery}
        cards={cards}
        setCards={setCards}
      />
    </>
  );
}
