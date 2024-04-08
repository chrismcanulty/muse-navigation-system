import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import SearchBar from '../../components/SearchBar';
import LanguageDropdown from '../../components/LanguageDropdown';

const Home = () => {
  const [languageAbb, setLanguageAbb] = useState('JA');

  return (
    <div className="home">
      <LanguageDropdown
        setLanguageAbb={setLanguageAbb}
        languageAbb={languageAbb}
      />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="300px"
        margin="200px"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ width: '700px' }}
        >
          <Typography
            variant="h6"
            color="#4285F4"
            sx={{ marginBottom: '40px' }}
          >
            ご希望の商品カテゴリをご入力ください
          </Typography>
          <SearchBar languageAbb={languageAbb} />
        </Box>
      </Box>
    </div>
  );
};

export default Home;
