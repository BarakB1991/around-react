import PopupWithForm from "./PopupWithForm";
import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({ onClose, isOpen, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [input, setinput] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    setinput({ name: currentUser.name, description: currentUser.about });
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: input.name,
      about: input.description,
    });
    handleReset();
    onClose();
  }

  function handleReset() {
    setinput({
      name: "",
      description: "",
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
      isOpen={isOpen}
      onClose={onClose}
      name="edit-profile"
      title="Edit profile"
      buttonText="Save"
      onSubmit={handleSubmit}
    >
      <input
        value={input.name || ""}
        onChange={handleChange}
        type="text"
        id="input-name"
        name="name"
        placeholder="Full Name"
        className="popup__input"
        minLength="2"
        maxLength="40"
        required
      />
      <span id="input-name-error" className="popup__error"></span>
      <input
        value={input.description || ""}
        onChange={handleChange}
        type="text"
        id="input-description"
        name="description"
        placeholder="Description"
        className="popup__input"
        minLength="2"
        maxLength="200"
        required
      />
      <span id="input-profession-error" className="popup__error"></span>
    </PopupWithForm>
  );
}
