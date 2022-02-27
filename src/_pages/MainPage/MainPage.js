import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import CardsGallery from "../../components/CardsData/CardsData";
import getAllCardsAPI from "../../services/photosAPI";
import s from "./MainPage.module.css";

export default function MainPage() {
  const [searchQuery, setSearchQuery] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getAllCardsAPI(cards).then((cards) => {
      setCards(() => [...cards].slice(0, 9));
    });
  }, [cards]);

  const handleSubmit = (searchQuery) => {
    setSearchQuery(searchQuery);
  };
  return (
    <>
      <div className={s.wrapper}>
        <NavLink className={s.navLink} to="/">
          Главная
        </NavLink>
        <SearchBar onSubmit={handleSubmit} />
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
