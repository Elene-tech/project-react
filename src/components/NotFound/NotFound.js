import { Link } from 'react-router-dom';
import styles from '../NotFound/NotFound.module.scss';

const NotFound = () => {
  return (
    <div>
      <h1 className={styles.info}>Oops! You seem to be lost.</h1>
      <p className={styles.helpful}>Here are some helpful links:</p>
      <div className={styles.allLinks}>
        <Link to="/" className={styles.faults}>
          Home
        </Link>
        <Link to="/about" className={styles.faults}>
          About
        </Link>
        <Link to="/favorite" className={styles.faults}>
          Favorite
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
