import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div>
      <div>
        <a href="#">
          <i className="fa-solid fa-list-check"></i>
        </a>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Favorite</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
