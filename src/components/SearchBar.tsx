import React, { useRef, useState, FunctionComponent, ChangeEvent } from 'react';
import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import KeyboardWrapper from './KeyboardWrapper';

const SearchBar = () => {
  const [text, setText] = useState<string | null>('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const [input, setInput] = useState('');
  const keyboard = useRef<any>();

  const onChangeInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const input = event.target.value;
    setInput(input);
    keyboard?.current?.setInput(input);
  };

  // const onChange = (input: string) => {
  //   console.log('Input changed', input);
  // };

  // const onKeyPress = (button: any) => {
  //   console.log('Button pressed', button);
  // };

  const onClick = () => {
    console.log('clicked!', input);
  };

  // https://hodgef.com/simple-keyboard/editor/?d=simple-keyboard/react-simple-keyboard-typescript-hooks/tree/master

  return (
    <>
      <TextField
        fullWidth
        value={input}
        placeholder="商品カテゴリ検索"
        sx={{ marginBottom: '30px' }}
        onChange={(e) => onChangeInput(e)}
        // onChange={(e) => setText(e.target.value)}
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
      {/* <input
        value={input}
        placeholder={'Tap on the virtual keyboard to start'}
        onChange={(e) => onChangeInput(e)}
      /> */}
      <KeyboardWrapper keyboardRef={keyboard} onChange={setInput} />
      {/* <Keyboard /> */}
    </>
  );
};

export default SearchBar;
