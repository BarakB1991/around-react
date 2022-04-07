import logo from "../images/Logo.svg";
function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="Around The U.S. Logo" className="logo" />
      </header>
    </>
  );
}

export default Header;
