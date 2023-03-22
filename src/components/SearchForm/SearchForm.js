import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addSearch } from '../../redux/searchStringReducer';

const SearchForm = () => {
  const [searchLet, setSearchLet] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(addSearch(''));
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSearch(searchLet));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextInput
        placeholder="Search..."
        value={searchLet}
        onChange={(e) => setSearchLet(e.target.value)}
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
