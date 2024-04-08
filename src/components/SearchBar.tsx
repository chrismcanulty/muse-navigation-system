import React, { useRef, useState, ChangeEvent } from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import 'react-simple-keyboard/build/css/index.css';
import KeyboardWrapper from './KeyboardWrapper';
import LanguageDropdown from './LanguageDropdown';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState('Japanese');
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
      <Box
        display="flex"
        alignItems="center"
        justifyContent="right"
        marginBottom="20px"
      >
        <LanguageDropdown />
      </Box>
      <KeyboardWrapper
        language={language}
        keyboardRef={keyboard}
        onChange={setInput}
      />
    </>
  );
};

export default SearchBar;