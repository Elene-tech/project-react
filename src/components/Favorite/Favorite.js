import styles from './Favorite.module.scss';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import Card from '../Card/Card';

const Favorite = () => {
  const favoriteCards = useSelector((state) => getFavoriteCards(state));
  return (
    <Container>
      <div>
        <PageTitle>Favorite</PageTitle>
        <p className={styles.description}>Lorem Ipsum...</p>
        {favoriteCards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            isFavorite={card.isFavorite}
            id={card.id}
          />
        ))}
      </div>
    </Container>
  );
};
export default Favorite;
//Додати PageTitle
