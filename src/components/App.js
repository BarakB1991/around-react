import React, { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditAvatarOpen, setIsEditAvatarOpen] = useState(false);
  const [isAddPlaceOpen, setIsAddPlaceOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isconfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserData()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  const closeAllPopups = () => {
    setIsEditAvatarOpen(false);
    setIsEditProfileOpen(false);
    setIsAddPlaceOpen(false);
    setIsConfirmationOpen(false);
    setSelectedCard(null);
  };

  function handleCardDelete(card) {
    api
      .removeUserCard(card._id)
      .then(() => {
        const newCards = cards.filter(
          (currentCard) => currentCard._id !== card._id
        );
        setCards(newCards);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) =>
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        )
      )
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }

  const handleUpdateUser = (data) => {
    api
      .setUserInfo(data)
      .then((updatedUser) => setCurrentUser(updatedUser))
      .catch((err) => console.log(`Error: ${err}`));
  };

  const handleUpdateAvatar = (avatar) => {
    api
      .setUserAvatar(avatar)
      .then((updatedAvatar) => setCurrentUser(updatedAvatar))
      .catch((err) => console.log(`Error: ${err}`));
  };

  const handleAddCard = (card) => {
    api
      .addNewCard(card)
      .then((newCard) => setCards([newCard, ...cards]))
      .catch((err) => console.log(`Error: ${err}`));
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
    <CurrentUserContext.Provider value={currentUser}>
      <div className="wrapper">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onDeleteButtonClick={handleConfirmationClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditProfilePopup
          onUpdateUser={handleUpdateUser}
          onClose={closeAllPopups}
          isOpen={isEditProfileOpen}
        ></EditProfilePopup>
        <AddPlacePopup
          onAddCard={handleAddCard}
          onClose={closeAllPopups}
          isOpen={isAddPlaceOpen}
        ></AddPlacePopup>
        <EditAvatarPopup
          onUpdateAvatar={handleUpdateAvatar}
          onClose={closeAllPopups}
          isOpen={isEditAvatarOpen}
        ></EditAvatarPopup>
        <PopupWithForm
          isOpen={isconfirmationOpen}
          onClose={closeAllPopups}
          name="confirm"
          title="Are you sure?"
          buttonText="Yes"
        ></PopupWithForm>
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
