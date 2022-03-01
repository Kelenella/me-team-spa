import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export default function Navigation() {
  return (
    <>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? s.activeLink : s.navLink
              }
              to="/me-team-spa"
            >
              Главная
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? s.activeLink : s.navLink
              }
              to="/favorites"
            >
              Избранное
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
