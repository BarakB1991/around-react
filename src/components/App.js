import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

// const onClose = {};

function App() {
  const [isEditAvatarOpen, toggleIsEditAvatarOpen] = useState(false);
  const [isAddPlaceOpen, toggleIsAddPlaceOpen] = useState(false);
  const [isEditProfileOpen, toggleIsEditProfileOpen] = useState(false);

  const handleCloseButton = () => {
    toggleIsEditAvatarOpen(false);
    toggleIsEditProfileOpen(false);
    toggleIsAddPlaceOpen(false);
  };

  const handleEditAvatarClick = () => {
    toggleIsEditAvatarOpen(true);
  };

  const handleEditProfileClick = () => {
    toggleIsEditProfileOpen(true);
  };

  const handleAddPlaceClick = () => {
    toggleIsAddPlaceOpen(true);
  };

  const handleCardClick = () => {
    document.querySelector(".popup_type_image").classList.add("popup_visible");
  };

  return (
    <div className="wrapper">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        onClose={handleCloseButton}
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
        onClose={handleCloseButton}
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
        onClose={handleCloseButton}
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
        // isOpen={isConfirmOpen}
        onClose={handleCloseButton}
        name="confirm"
        title="Are you sure?"
        buttonText="Yes"
      ></PopupWithForm>
      <ImagePopup />
      <PopupWithForm name="confirm" title="Are you sure?" buttonText="Yes" />
      {/* <div className="popup popup_type_confirm">
        <div className="popup__box">
          <button
            type="button"
            aria-label="Close"
            className="popup__close-btn"
          ></button>
          <form className="popup__form" id="confirm-action" noValidate>
            <h3 className="popup__title popup__title_type_confirm">
              Are you sure?
            </h3>
            <button
              type="submit"
              aria-label="Yes"
              className="popup__submit-btn popup__submit-btn_type_confirm"
            >
              Yes
            </button>
          </form>
        </div>
      </div> */}
      <template id="card-template">
        <li className="card">
          <button alt="Delete button" className="card__delete-btn"></button>
          <img type="image" src="#" alt="Card image" className="card__img" />
          <div className="card__info">
            <h2 className="card__title"></h2>
            <div className="card__like-container">
              <button
                type="button"
                aria-label="Like"
                className="card__like-btn"
              ></button>
              <span className="card__like-counter"></span>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
