import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarOpen, setIsEditAvatarOpen] = useState(false);
  const [isAddPlaceOpen, setIsAddPlaceOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isconfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const closeAllPopups = () => {
    setIsEditAvatarOpen(false);
    setIsEditProfileOpen(false);
    setIsAddPlaceOpen(false);
    setIsConfirmationOpen(false);
    setSelectedCard(null);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfileOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlaceOpen(true);
  };

  const handleConfirmationClick = () => {
    setIsConfirmationOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="wrapper">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onDeleteButtonClick={handleConfirmationClick}
      />
      <Footer />
      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isEditProfileOpen}
        name="edit-profile"
        title="Edit profile"
        buttonText="Save"
      >
        <input
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
          type="text"
          id="input-profession"
          name="profession"
          placeholder="Profession"
          className="popup__input"
          minLength="2"
          maxLength="200"
          required
        />
        <span id="input-profession-error" className="popup__error"></span>
      </PopupWithForm>
      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isAddPlaceOpen}
        name="add-card"
        title="New place"
        buttonText="Create"
      >
        <input
          type="text"
          id="input-card-title"
          name="cardtitle"
          placeholder="Title"
          className="popup__input popup__input_type_add-card"
          minLength="1"
          maxLength="30"
          required
        />
        <span id="input-card-title-error" className="popup__error"></span>
        <input
          type="url"
          id="input-image-link"
          name="imagelink"
          placeholder="Image Link"
          className="popup__input popup__input_type_add-card"
          required
        />
        <span id="input-image-link-error" className="popup__error"></span>
      </PopupWithForm>
      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isEditAvatarOpen}
        name="edit-avatar"
        title="Change profile picture"
        buttonText="Save"
      >
        <input
          type="url"
          id="input-avatar-link"
          name="avatar"
          placeholder="Avatar Link"
          className="popup__input popup__input_type_edit-avatar"
          required
        />
        <span id="input-avatar-link-error" className="popup__error"></span>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isconfirmationOpen}
        onClose={closeAllPopups}
        name="confirm"
        title="Are you sure?"
        buttonText="Yes"
      ></PopupWithForm>
      <ImagePopup onClose={closeAllPopups} card={selectedCard} />
    </div>
  );
}

export default App;
