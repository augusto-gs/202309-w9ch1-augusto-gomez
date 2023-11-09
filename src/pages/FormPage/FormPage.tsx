import Form from "../../components/Form/Form";
import FormPageStyled from "./FormPageStyled";

const FormPage = () => {
  return (
    <FormPageStyled>
      <h2 className="form-title">Create your own movie</h2>
      <Form />
    </FormPageStyled>
  );
};

export default FormPage;
