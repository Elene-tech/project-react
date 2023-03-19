import styles from './Card.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { toggleFavorite } from '../../redux/store';

const Card = (props) => {
  const { isFavorite, id } = props;
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(toggleFavorite(id));
  };
  return (
    <ul className={styles.cards}>
      <li className={styles.card}>
        <div className={styles.cardTitle}>
          {props.title}
          <span
            className={clsx(
              styles.icon,
              'fa fa-star-o',
              isFavorite && styles.isFavorite
            )}
            onClick={handleFavorite}
          ></span>
        </div>
      </li>
    </ul>
  );
};

export default Card;
