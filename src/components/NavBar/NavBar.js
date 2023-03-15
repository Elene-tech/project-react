import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.check}>
        <a href="/" className={styles.icon}>
          <i className="fa fa-tasks"></i>
        </a>
      </div>
      <div>
        <ul className={styles.links}>
          <li>
            <a href="/" className={styles.link}>
              Home
            </a>
          </li>
          <li>
            <a href="/Favorite" className={styles.link}>
              Favorite
            </a>
          </li>
          <li>
            <a href="/About" className={styles.link}>
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
