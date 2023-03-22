import styles from './Favorite.module.scss';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsReducer';
import Card from '../Card/Card';

const Favorite = () => {
  const favoriteCards = useSelector((state) => getFavoriteCards(state));
  if (!favoriteCards.length) {
    return <p>Sorry, you don`t have favorive cards</p>;
  }
  return (
    <Container>
      <div>
        <PageTitle>Favorite</PageTitle>
        <div className={styles.favoriteColumn}>
          <article className={styles.column}>
            <p className={styles.description}>My Fovorite...</p>
            <ul className={styles.cards}>
              {favoriteCards.map((card) => (
                <Card
                  key={card.id}
                  title={card.title}
                  isFavorite={card.isFavorite}
                  id={card.id}
                />
              ))}
            </ul>
          </article>
        </div>
      </div>
    </Container>
  );
};
export default Favorite;
//Додати PageTitle
