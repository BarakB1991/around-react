export default function PopupWithImage({ link, name }) {
  return (
    <div class="popup popup_type_image">
      <div class="popup__content">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          class="popup__close-btn popup__close-btn_type_image"
        ></button>
        <img src={link} alt={name} class="popup__image" />
        <h4 class="popup__title popup__title_type_image">{name}</h4>
      </div>
    </div>
  );
}
