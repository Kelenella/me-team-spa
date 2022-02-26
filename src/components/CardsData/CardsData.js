import getAllCardsAPI from "../../services/photosAPI";

import s from "./CardsData.module.css";

export default function CardsGallery({ cards, setCards }) {
  return (
    <div className={s.cardsWrapper}>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <p>{card.albumId}</p>
            <p>{card.title}</p>
            <img src={card.thumbnailUrl} alt="картинка" width="150" />
          </li>
        ))}
      </ul>
      <button>Load more</button>
    </div>
  );
}
