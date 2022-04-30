import PopupWithForm from "./PopupWithForm";
import { useState } from "react";

export default function AddPlacePopup({ onClose, isOpen, onAddCard }) {
  const [input, setinput] = useState({
    cardTitle: "",
    imageLink: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    onAddCard({
      name: input.cardTitle,
      link: input.imageLink,
    });
    handleReset();
    onClose();
  }

  function handleReset() {
    setinput({
      name: "",
      link: "",
    });
  }

  function handleChange(e) {
    const value = e.target.value;
    setinput({
      ...input,
      [e.target.name]: value,
    });
  }

  return (
    <PopupWithForm
      onClose={onClose}
      isOpen={isOpen}
      name="add-card"
      title="New place"
      buttonText="Create"
      onSubmit={handleSubmit}
    >
      <input
        value={input.cardTitle || ""}
        onChange={handleChange}
        type="text"
        id="input-card-title"
        name="cardTitle"
        placeholder="Title"
        className="popup__input popup__input_type_add-card"
        minLength="1"
        maxLength="30"
        required
      />
      <span id="input-card-title-error" className="popup__error"></span>
      <input
        value={input.imageLink || ""}
        onChange={handleChange}
        type="url"
        id="input-image-link"
        name="imageLink"
        placeholder="Image Link"
        className="popup__input popup__input_type_add-card"
        required
      />
      <span id="input-image-link-error" className="popup__error"></span>
    </PopupWithForm>
  );
}
