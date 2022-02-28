import { Routes, Route } from "react-router-dom";
import MainPage from "../../_pages/MainPage";
import FavoritesPage from "../../_pages/FavoritesPage";

import s from "./Header.module.css";

export default function Header() {
  return (
    <>
      <nav className={s.headerWrapper}>
        <Routes>
          <Route path="/me-team-spa" element={<MainPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </nav>
    </>
  );
}
