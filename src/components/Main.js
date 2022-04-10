import api from "../utils/Api";
import React, { useEffect, useState } from "react";
import Card from "./Card";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
  onDeleteButtonClick,
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getCardsAndUserData()
      .then(([userData, cards]) => {
        console.log(cards);
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
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
            style={{ backgroundImage: `url(${userAvatar})` }}
          />
          <button
            onClick={onEditAvatarClick}
            className="profile__img-button"
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__header">
            <h1 className="profile__name">{userName}</h1>
            <button
              onClick={onEditProfileClick}
              type="button"
              aria-label="Edit Profile"
              className="profile__edit-btn"
            ></button>
          </div>
          <p className="profile__about">{userDescription}</p>
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
              onDeleteButtonClick={onDeleteButtonClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
