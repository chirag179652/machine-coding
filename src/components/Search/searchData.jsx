import React, { useState } from 'react';
import styles from './searchData.module.css';
import { getSearchData } from '../../api/searchData';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const submitForm = (event) => {
    event.preventDefault();
    console.log('submitted');
  };

  const showSuggestions = async (event) => {
    const suggestedData = await getSearchData(searchText);
    setSuggestions(suggestedData);

    console.log(suggestions);
  };
  return (
    <form onSubmit={submitForm} id='searchData'>
      <div className={styles.container}>
        <div className={styles.heading}>Search</div>

        <div className={styles.inputContainer}>
          <input
            name='searchText'
            onChange={(event) => {
              setSearchText(event.target.value);
              showSuggestions();
            }}
            value={searchText}
            className={styles.inputField}
          />
          <input
            onClick={submitForm}
            type='submit'
            className={styles.button}
            value='Search'
          ></input>
        </div>

        <div className={styles.suggestions}>
          {searchText?.length > 0 &&
            suggestions?.map((suggestion) => {
              return (
                <span className={styles.suggestionItem}>
                  {suggestion?.name}
                </span>
              );
            })}
        </div>
      </div>
    </form>
  );
};

export default Search;
