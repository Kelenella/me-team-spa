import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import s from "./SearchBar.module.css";

export default function SearchBar(onSubmit) {
  const [searchQuery, setSearchQuery] = useState("");

  //   const history = useHistory();
  const location = useLocation();

  const handleChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchQuery.trim() === "") {
      toast.warning("Type something", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    // history.push({ ...location, search: `query=${searchQuery}` });

    onSubmit(searchQuery);
    setSearchQuery("");
  };

  return (
    <>
      <form className={s.form}>
        <label>
          <input className={s.input} />
        </label>
      </form>
    </>
  );
}
