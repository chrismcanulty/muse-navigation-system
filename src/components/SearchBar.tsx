import React, { useState, ChangeEvent } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type SearchBarProps = {
  placeholder: string;
  onSearch: (arg0: string) => void;
};

const SearchBar = ({ placeholder, onSearch }: SearchBarProps) => {
  const [input, setInput] = useState('');

  const onChangeInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const input = event.target.value;
    setInput(input);
  };

  const onClick = async () => {
    onSearch(input);
  };

  // override blue background on autocomplete suggestion which doesn't cover the entire TextField component
  const inputStyle = { WebkitBoxShadow: '0 0 0 1000px white inset' };

  return (
    <>
      <TextField
        fullWidth
        value={input}
        placeholder={placeholder}
        sx={{ marginBottom: '30px' }}
        onChange={(e) => onChangeInput(e)}
        inputProps={{ style: inputStyle }}
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
    </>
  );
};

export default SearchBar;