function Main() {
  const handleEditAvatarClick = () => {
    document
      .querySelector(".popup_type_edit-avatar")
      .classList.add("popup_visible");
  };
  const handleEditProfileClick = () => {
    document
      .querySelector(".popup_type_edit-profile")
      .classList.add("popup_visible");
  };
  const handleAddPlaceClick = () => {
    document
      .querySelector(".popup_type_add-card")
      .classList.add("popup_visible");
  };

  return (
    <>
      <main>
        <section className="profile" id="">
          <div className="profile__img-container">
            <img alt="Avatar" className="profile__img" />
            <button
              onClick={handleEditAvatarClick}
              className="profile__img-button"
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__header">
              <h1 className="profile__name"></h1>
              <button
                onClick={handleEditProfileClick}
                type="button"
                aria-label="Edit Profile"
                className="profile__edit-btn"
              ></button>
            </div>
            <p className="profile__about"></p>
          </div>
          <button
            onClick={handleAddPlaceClick}
            type="button"
            aria-label="Add Image"
            className="profile__add-btn"
          ></button>
        </section>
        <section className="cards">
          <ul className="cards__list"></ul>
        </section>
      </main>
    </>
  );
}

export default Main;
