import { useState } from "react";
import EllipsisText from "react-ellipsis-text";
import usePagination from "../../hooks/usePagination";
import getAllCardsAPI from "../../services/photosAPI";
import Modal from "../Modal";

import s from "./CardsData.module.css";

export default function CardsGallery({ cards, setCards }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const addToFavorite = () => {};

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 9,
    count: cards.length,
  });

  return (
    <>
      <div className={s.cardsWrapper}>
        <ul className={s.list}>
          {cards.slice(firstContentIndex, lastContentIndex).map((card) => (
            <li key={card.id} className={s.item}>
              <p className={s.numberAlbum}>{card.albumId}</p>
              <p className={s.title}>
                <EllipsisText text={card.title} length={25} />
              </p>
              <img src={card.thumbnailUrl} alt="картинка" className={s.img} />
              <button onClick={toggleModal}>Подробно</button>
              {!modal && (
                <Modal onClose={toggleModal}>
                  <button onClick={addToFavorite}>Добавить в избранное</button>
                </Modal>
              )}
            </li>
          ))}
        </ul>
        <div className="pagination">
          <p className="text">
            {page}/{totalPages}
          </p>
          <button onClick={prevPage} className="page">
            &larr;
          </button>
          {/* @ts-ignore */}
          {[...Array(totalPages).keys()].map((el) => (
            <button
              onClick={() => setPage(el + 1)}
              key={el}
              className={`page ${page === el + 1 ? "active" : ""}`}
            >
              {el + 1}
            </button>
          ))}
          <button onClick={nextPage} className="page">
            &rarr;
          </button>
        </div>
      </div>
    </>
  );
}
