import { useState } from "react";
import FormStyled from "./FormStyled";
import { UserFilm } from "../../store/features/types";
import { useAppDispatch } from "../../store/hooks";
import { addNewMovieActionCreator } from "../../store/features/slices";
import useMovieApi from "../../hooks/useMoviesApi";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const dispatch = useAppDispatch();
  const { addMovieToApi } = useMovieApi();
  const navigate = useNavigate();

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

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const addedMovie = { ...newMovie, id: Math.floor(Math.random() * 100000) };
    const isMovieAddedToApi = await addMovieToApi(newMovie);
    if (!isMovieAddedToApi) {
      dispatch(addNewMovieActionCreator(addedMovie));
    }

    navigate("/");
  };

  return (
    <FormStyled className="form" onSubmit={onFormSubmit}>
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
          type="number"
          className="form__input"
          id="duration"
          required
          autoComplete="off"
          onChange={onChangeData}
        />
      </label>
      <label className="form__label checkbox" htmlFor="hasBeenSeen">
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
