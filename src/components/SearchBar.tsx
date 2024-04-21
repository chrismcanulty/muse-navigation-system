import React, { useState, ChangeEvent } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { inputStyle } from '../constants/constants';

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

  return (
    <>
      <TextField
        name={'search-text-field'}
        id={'search-text-field'}
        label={'search-text-field-label'}
        data-testid={'search-text-field'}
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
                data-testid={'search-icon'}
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
