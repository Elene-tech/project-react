import styles from './List.module.scss';
import Column from '../Column/Column.js';
import { useState } from 'react';
import shortid from 'shortid';
import ColumnForm from '../ColumnForm/ColumnForm';
//import { useEffect } from 'react';

const List = () => {
  const [columns, setColumns] = useState([
    {
      id: 1,
      title: 'Books',
      icon: 'book',
      cards: [
        { id: 1, title: 'This is Going to Hurt' },
        { id: 2, title: 'Interpreter of Maladies' },
      ],
    },
    {
      id: 2,
      title: 'Movies',
      icon: 'film',
      cards: [
        { id: 1, title: 'Harry Potter' },
        { id: 2, title: 'Star Wars' },
      ],
    },
    {
      id: 3,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        { id: 1, title: 'The Witcher' },
        { id: 2, title: 'Skyrim' },
      ],
    },
  ]);

  const addColumn = (newColumn) => {
    setColumns([
      ...columns,
      {
        id: shortid(),
        title: newColumn.title,
        icon: newColumn.icon,
        cards: [],
      },
    ]);
  };

  return (
    <div className={styles.description}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Things to do<span className={styles.span}>soon!</span>
        </h2>
      </header>
      <p>Interesting things I want to check out</p>
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column
            key={column.id}
            id={column.id}
            title={column.title}
            icon={column.icon}
            cards={column.cards}
          />
        ))}
      </section>
      <ColumnForm addColumn={addColumn} />
    </div>
  );
};

export default List;

// useEffect(() => {
//   setTimeout(() => {
//     setColumns([...columns, { id: 4, title: 'Test column' }]);
//   }, 2000);
// }, []);
