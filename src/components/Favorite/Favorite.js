import styles from './Favorite.module.scss';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
  return (
    <Container>
      <div>
        <PageTitle>Favorite</PageTitle>
        <p className={styles.description}>Lorem Ipsum...</p>
      </div>
    </Container>
  );
};
export default Favorite;
//Додати PageTitle
