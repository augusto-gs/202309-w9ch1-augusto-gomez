import Form from "../../components/Form/Form";
import NewMoviePageStyled from "./NewMoviePageStyled";

const NewMoviePage = () => {
  return (
    <NewMoviePageStyled>
      <h2 className="form-title">Create your own movie</h2>
      <Form />
    </NewMoviePageStyled>
  );
};

export default NewMoviePage;
