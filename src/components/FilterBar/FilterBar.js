import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import s from "./FilterBar.module.css";

export default function FilterBar(onSubmit) {
  const [filter, setFilter] = useState("");

  //   const history = useHistory();
  const location = useLocation();

  const handleChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  return (
    <>
      <div>
        <label>
          <input
            className={s.input}
            type="text"
            // value={filter}
            onChange={handleChange}
          />
        </label>
      </div>
    </>
  );
}
