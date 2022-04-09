function Card({ onCardClick, card, onDeleteButtonClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li class="card">
      <button
        alt="Delete button"
        class="card__delete-btn"
        onClick={onDeleteButtonClick}
      ></button>
      <img
        type="image"
        src={card.link}
        alt="Card"
        class="card__img"
        onClick={handleClick}
      />
      <div class="card__info">
        <h2 class="card__title">{card.name}</h2>
        <div class="card__like-container">
          <button
            type="button"
            aria-label="Like"
            class="card__like-btn"
          ></button>
          <span class="card__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
