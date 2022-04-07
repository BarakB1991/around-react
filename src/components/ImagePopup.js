export default function ImagePopup(props) {
  return (
    <div className="popup popup_type_image">
      <div className="popup__content">
        <button
          type="button"
          aria-label="Close"
          className="popup__close-btn popup__close-btn_type_image"
        ></button>
        <img src="#" alt="Card image" className="popup__image" />
        <h4 className="popup__title popup__title_type_image"></h4>
      </div>
    </div>
  );
}
