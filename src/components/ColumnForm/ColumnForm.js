import { useState } from 'react';
import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';

const ColumnForm = (props) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const addColumn = (e) => {
    e.preventDefault();
    props.addColumn({ title: title, icon: icon });
    setTitle('');
    setIcon('');
  };
  return (
    <form className={styles.columnForm} onSubmit={addColumn}>
      Title:
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      Icon:
      <input
        type="text"
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <Button>Add Column</Button>
    </form>
  );
};
export default ColumnForm;
