import styles from './Favorite.module.scss';
import Container from '../Container/Container';
import NavBar from '../NavBar/NavBar';

const Favorite = () => {
  return (
    <Container>
      <div>
        <h2 className={styles.text}>Favorite</h2>
        <p className={styles.description}>Lorem Ipsum...</p>
      </div>
    </Container>
  );
};
export default Favorite;
//Додати PageTitle
