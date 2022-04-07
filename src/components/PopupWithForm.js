export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__box">
        <button
          type="button"
          // onClick={handleCloseButton}
          aria-label="Close"
          className="popup__close-btn"
        ></button>
        <h3 className="popup__title">{props.title}</h3>
        <form className="popup__form" id={`${props.name}-form`} noValidate>
          {props.children}
          <button
            type="submit"
            aria-label="Submit"
            className="popup__submit-btn"
          >
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
