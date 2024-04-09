import React, { useRef, useState, ChangeEvent, useEffect } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import 'react-simple-keyboard/build/css/index.css';
// import KeyboardWrapper from './KeyboardWrapper';

const SearchBar = ({
  languageAbb,
  searchTerm,
  setSearchTerm,
  searchResults,
}: {
  languageAbb: string;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchResults: any;
}) => {
  const [input, setInput] = useState('');
  const keyboard = useRef<any>();

  const onChangeInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const input = event.target.value;
    setInput(input);
    keyboard?.current?.setInput(input);
  };

  const onClick = () => {
    searchResults();
  };

  useEffect(() => {
    setSearchTerm(input);
  }, [input, setSearchTerm]);

  return (
    <>
      {languageAbb === 'JA' && (
        <TextField
          fullWidth
          value={input}
          placeholder="商品カテゴリ検索"
          sx={{ marginBottom: '30px' }}
          onChange={(e) => onChangeInput(e)}
          InputProps={{
            style: {
              borderRadius: '25px',
            },
            startAdornment: <InputAdornment position="start"></InputAdornment>,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={onClick}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
      {languageAbb === 'EN' && (
        <TextField
          fullWidth
          value={input}
          placeholder="Product category search"
          sx={{ marginBottom: '30px' }}
          onChange={(e) => onChangeInput(e)}
          InputProps={{
            style: {
              borderRadius: '25px',
            },
            startAdornment: <InputAdornment position="start"></InputAdornment>,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={onClick}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
      {/* <KeyboardWrapper
        languageAbb={languageAbb}
        keyboardRef={keyboard}
        onChange={setInput}
      /> */}
    </>
  );
};

export default SearchBar;
