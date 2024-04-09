import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import SearchBar from '../../components/SearchBar';
import LanguageDropdown from '../../components/LanguageDropdown';
import { Data } from '../../data/Data';

const Home = () => {
  const [languageAbb, setLanguageAbb] = useState('JA');
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<string[]>([]);

  // text converter: https://www.google.co.jp/ime/cgiapi.html
  // Guide: https://qiita.com/akifumii/items/bf1511cb8bc53e12f503

  const searchResults = () => {
    let resultArray: string[] = [];
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
            {languageAbb === 'JA' && 'ご希望の商品カテゴリをご入力ください'}
            {languageAbb === 'EN' && 'Please select desired product category'}
          </Typography>
          <SearchBar
            languageAbb={languageAbb}
            searchTerm={searchTerm}
            searchResults={searchResults}
            setSearchTerm={setSearchTerm}
          />
          <Typography>{searchTerm}</Typography>
          {results.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Home;
