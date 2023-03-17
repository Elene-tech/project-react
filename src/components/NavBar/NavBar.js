import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.check}>
        <Link to="/" className={styles.icon}>
          <i className="fa fa-tasks"></i>
        </Link>
      </div>
      <div>
        <ul className={styles.links}>
          <li className={styles.linkActive}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : undefined
              }
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li className={styles.linkActive}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : undefined
              }
              to="Favorite"
            >
              Favorite
            </NavLink>
          </li>
          <li className={styles.linkActive}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : undefined
              }
              to="About"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
