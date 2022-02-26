import { Link } from "react-router-dom";
// import s from "./FavoritesPage.module.css";
export default function FavoritesPage() {
  return (
    <>
      <p>Добро пожаловать в Избранное</p>
      <Link to="/">Вернуться на главную</Link>
    </>
  );
}
