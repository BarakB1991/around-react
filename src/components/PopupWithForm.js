export default function PopupWithForm({
  children,
  name,
  title,
  buttonText,
  isOpen,
  onClose,
}) {
  return (
    <div
      className={`popup popup_type_${name} ${isOpen ? "popup_visible" : ""}`}
    >
      <div className="popup__box">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="popup__close-btn"
        ></button>
        <h3 className="popup__title">{title}</h3>
        <form className="popup__form" id={`${name}-form`} noValidate>
          {children}
          <button
            type="submit"
            aria-label="Submit"
            className="popup__submit-btn"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
