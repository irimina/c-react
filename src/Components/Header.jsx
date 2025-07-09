import reactLogo from "../assets/react-logo.png";

function Header() {
  return (
    <header className="header">
      <img src={reactLogo} alt="React logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
