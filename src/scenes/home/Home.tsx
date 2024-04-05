import React, { useState } from 'react';
import { Box, useMediaQuery, Typography } from '@mui/material';
import SearchBar from '../../components/SearchBar';
import { Data } from '../../data/Data';

const Home = () => {
  return (
    <div className="home">
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
          <SearchBar />
        </Box>
      </Box>
    </div>
  );
};

export default Home;
