import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import SearchBar from './SearchBar';
import LanguageDropdown from './LanguageDropdown';
import { Data } from '../../data/Data';
import CategoryList from './CategoryList';

const Home = () => {
  const [languageAbb, setLanguageAbb] = useState('JA');
  const [results, setResults] = useState<string[]>([]);
  const [clickSearch, setClickSearch] = useState<boolean>(false);

  // text converter: https://www.google.co.jp/ime/cgiapi.html
  // Guide: https://qiita.com/akifumii/items/bf1511cb8bc53e12f503

  const searchResults = (searchTerm: string) => {
    let resultArray: string[] = [];
    if (searchTerm === '') {
      setResults([]);
      return;
    }
    Data.forEach((item) => {
      let temp = item.jicfsMiddle.reduce((accumulator, element) => {
        if (element.jicfsNameMiddle.includes(searchTerm)) {
          accumulator.push(element.jicfsNameMiddle);
        }
        return accumulator;
      }, [] as string[]);
      resultArray = resultArray.concat(temp);
    });
    setResults(resultArray);
  };

  return (
    <div className="home">
      <LanguageDropdown
        setLanguageAbb={setLanguageAbb}
        languageAbb={languageAbb}
        setClickSearch={setClickSearch}
        setResults={setResults}
      />
      <Box
        display="flex"
        justifyContent="center"
        height="300px"
        margin="200px"
        marginTop="225px"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ width: '850px' }}
        >
          <Typography
            variant="h6"
            color="#4285F4"
            sx={{ marginBottom: '40px' }}
          >
            {languageAbb === 'JA' && 'ご希望の商品カテゴリをご入力ください'}
            {languageAbb === 'EN' && 'Please select desired product category'}
          </Typography>
          <SearchBar
            setClickSearch={setClickSearch}
            languageAbb={languageAbb}
            searchResults={searchResults}
          />
          <CategoryList
            clickSearch={clickSearch}
            languageAbb={languageAbb}
            results={results}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Home;
