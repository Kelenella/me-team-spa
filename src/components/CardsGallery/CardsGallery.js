import { NavLink } from "react-router-dom";
import EllipsisText from "react-ellipsis-text";
import usePagination from "../../hooks/usePagination";
import s from "./CardsGallery.module.css";

export default function CardsGallery({ cards, setCards, filter }) {
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
        {/* <div className={s.filteredWrap}>
          <ul>
            {!filter &&
              filter.map((filter) => (
                <li className={s.item} key={filter.id}>
                  <p>{filter.title}</p>
                </li>
              ))}
          </ul>
        </div> */}
        <ul className={s.list}>
          {filter &&
            filter.slice(firstContentIndex, lastContentIndex).map((filter) => (
              <li key={filter.id} className={s.item}>
                <p className={s.numberAlbum}>{filter.albumId}</p>
                <p className={s.title}>
                  <EllipsisText text={filter.title} length={25} />
                </p>
                <img
                  src={filter.thumbnailUrl}
                  alt="картинка"
                  className={s.img}
                />
                <button>
                  <NavLink className={s.navLink} to="/details">
                    Подробно
                  </NavLink>
                </button>
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
