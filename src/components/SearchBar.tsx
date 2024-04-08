import React, { useRef, useState, ChangeEvent } from 'react';
import { TextField, InputAdornment, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import 'react-simple-keyboard/build/css/index.css';
import KeyboardWrapper from './KeyboardWrapper';

const SearchBar = ({ languageAbb }: { languageAbb: string }) => {
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
    console.log('clicked!', input);
  };

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
      <Box
        display="flex"
        alignItems="center"
        justifyContent="right"
        marginBottom="20px"
      ></Box>
      <KeyboardWrapper
        languageAbb={languageAbb}
        keyboardRef={keyboard}
        onChange={setInput}
      />
    </>
  );
};

export default SearchBar;
