import { useState } from "react";
import EllipsisText from "react-ellipsis-text";
import getAllCardsAPI from "../../services/photosAPI";
import Modal from "../Modal";

import s from "./CardsData.module.css";

export default function CardsGallery({ cards, setCards }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {!modal && (
        <Modal onClose={toggleModal}>
          <button>Load more</button>
        </Modal>
      )}
      <div className={s.cardsWrapper}>
        <ul className={s.list}>
          {cards.map((card) => (
            <li key={card.id} className={s.item}>
              <p className={s.numberAlbum}>{card.albumId}</p>
              <p className={s.title}>
                <EllipsisText text={card.title} length={"35"} />
              </p>
              <img src={card.thumbnailUrl} alt="картинка" className={s.img} />
              <button>Подробно</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
