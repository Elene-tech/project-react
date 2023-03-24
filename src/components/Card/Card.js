import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { toggleFavorite, removeCard } from '../../redux/cardsReducer';

const Card = (props) => {
  const { isFavorite, id } = props;
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(toggleFavorite(id));
  };
  const removeCardFunc = () => {
    const payload = props.id;
    dispatch(removeCard(payload));
  };
  return (
    <ul className={styles.cards}>
      <li className={styles.card}>
        {props.title}
        <div className={styles.icons}>
          <span
            className={clsx(
              styles.icon,
              'fa fa-star-o',
              isFavorite && styles.isFavorite
            )}
            onClick={handleFavorite}
          ></span>
          <span
            className={clsx(styles.fa, styles.faTrash, 'fa', 'fa-trash')}
            onClick={removeCardFunc}
          ></span>
        </div>
      </li>
    </ul>
  );
};

export default Card;
