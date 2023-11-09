const Form = () => {
  return (
    <form className="form">
      <label className="form__label" htmlFor="name">
        Name: <input type="text" className="form__input" id="name" />
      </label>
      <label className="form__label" htmlFor="year">
        Year: <input type="text" className="form__input" id="year" />
      </label>
      <label className="form__label" htmlFor="imageUrl">
        Image Url: <input type="url" className="form__input" id="imageUrl" />
      </label>
      <label className="form__label" htmlFor="duration">
        Duration: <input type="text" className="form__input" id="duration" />
      </label>
      <label className="form__label" htmlFor="hasBeenSeeen">
        Did you see it? <input type="checkbox" />
      </label>
    </form>
  );
};

export default Form;
