export default function ImagePopup({ onClose, selectedCard }) {
  return (
    <div className="popup popup_type_image">
      <div className="popup__content">
        <button
          onClick={onClose}
          type="button"
          aria-label="Close"
          className="popup__close-btn popup__close-btn_type_image"
        ></button>
        <img
          src={selectedCard.link}
          alt={selectedCard.name}
          className="popup__image"
        />
        <h4 className="popup__title popup__title_type_image">
          {selectedCard.name}
        </h4>
      </div>
    </div>
  );
}
