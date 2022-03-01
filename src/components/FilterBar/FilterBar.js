import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import s from "./FilterBar.module.css";

export default function FilterBar({ value, onChange }) {
  return (
    <>
      <div>
        <label className={s.label}>
          Введите название альбома
          <input
            className={s.input}
            type="text"
            value={value}
            onChange={onChange}
          />
        </label>
      </div>
    </>
  );
}

FilterBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
