import { useState } from "react";
import FormStyled from "./FormStyled";
import { UserFilm } from "../../store/features/types";

const Form = () => {
  const emptyMovie: UserFilm = {
    name: "",
    year: 0,
    image_url: "",
    duration: 0,
    hasBeenSeen: false,
  };

  const [newMovie, setNewMovie] = useState(emptyMovie);

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMovie(() => ({
      ...newMovie,
      [event.target.id]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  };

  return (
    <FormStyled className="form">
      <label className="form__label" htmlFor="name">
        Name:{" "}
        <input
          type="text"
          className="form__input"
          id="name"
          required
          autoComplete="off"
          onChange={onChangeData}
        />
      </label>
      <label className="form__label" htmlFor="year">
        Year:{" "}
        <input
          type="number"
          className="form__input"
          id="year"
          required
          autoComplete="off"
          onChange={onChangeData}
        />
      </label>
      <label className="form__label" htmlFor="imageUrl">
        Image Url:
        <input
          type="url"
          className="form__input"
          id="image_url"
          required
          autoComplete="off"
          onChange={onChangeData}
        />
      </label>
      <label className="form__label" htmlFor="duration">
        Duration:{" "}
        <input
          type="text"
          className="form__input"
          id="duration"
          required
          autoComplete="off"
          onChange={onChangeData}
        />
      </label>
      <label className="form__label" htmlFor="hasBeenSeen">
        Did you see it?{" "}
        <input type="checkbox" onChange={onChangeData} id="hasBeenSeen" />
      </label>
      <button type="submit" className="form__button">
        Create
      </button>
    </FormStyled>
  );
};

export default Form;
