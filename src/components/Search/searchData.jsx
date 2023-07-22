import React, { useState } from 'react';
import styles from './searchData.module.css';
import { getSearchData } from '../../api/searchData';
import { useContext } from 'react';
import { ThemeContext } from '../../Hooks/themeContext';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const { theme, setTheme } = useContext(ThemeContext);

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
      <div
        className={styles.container}
        style={{
          backgroundColor:
            theme === 'dark' ? 'rgb(26,26,28)' : 'rgb(200,200,200)',
        }}
      >
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
