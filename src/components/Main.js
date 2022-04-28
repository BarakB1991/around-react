import api from "../utils/Api";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../context/CurrentUserContext";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
  onDeleteButtonClick,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  function handleCardDelete(card) {
    api
      .removeUserCard(card._id)
      .then(() => {
        const newCards = cards.
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

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__img-container">
          <div
            className="profile__img"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          />
          <button
            onClick={onEditAvatarClick}
            className="profile__img-button"
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__header">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              onClick={onEditProfileClick}
              type="button"
              aria-label="Edit Profile"
              className="profile__edit-btn"
            ></button>
          </div>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button
          onClick={onAddPlaceClick}
          type="button"
          aria-label="Add Image"
          className="profile__add-btn"
        ></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onDeleteButtonClick={handleCardDelete}
              onLikeButtonClick={handleCardLike}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
