function Card({ onCardClick, card }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <button alt="Delete button" className="card__delete-btn"></button>
      <img
        type="image"
        src={card.link}
        alt="Card"
        className="card__img"
        onClick={handleClick}
      />
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button
            type="button"
            aria-label="Like"
            className="card__like-btn"
          ></button>
          <span className="card__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
