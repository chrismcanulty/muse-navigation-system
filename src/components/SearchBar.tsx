import React, { useState } from 'react';
import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

const SearchBar = () => {
  const [text, setText] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const onChange = (input: string) => {
    console.log('Input changed', input);
  };

  const onKeyPress = (button: any) => {
    console.log('Button pressed', button);
  };

  const onClick = () => {
    console.log('clicked!', text);
  };

  return (
    <>
      <TextField
        fullWidth
        placeholder="商品カテゴリ検索"
        sx={{ marginBottom: '30px' }}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => setKeyboardVisible(true)}
        onBlur={() => setKeyboardVisible(false)}
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
      {keyboardVisible && <Keyboard />}
    </>
  );
};

export default SearchBar;
