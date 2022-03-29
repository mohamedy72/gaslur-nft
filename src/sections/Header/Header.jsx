import Button from "../../UI/Buttons/Button";
import "./header.css";
const Header = () => {
  return (
    <header className="main-header">
      <h1 className="logo">gaslur</h1>
      <nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-item-link active">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/profile" className="nav-item-link">
              My profile
            </a>
          </li>
          <li className="nav-item">
            <a href="/activity" className="nav-item-link">
              activity
            </a>
          </li>
          <li className="nav-item">
            <a href="/howitworks" className="nav-item-link">
              How it works
            </a>
          </li>
        </ul>
      </nav>

      <div className="btn-group">
        <Button variant="outlined" text="create" />
        <Button text="sign in" />
      </div>
    </header>
  );
};

export default Header;
