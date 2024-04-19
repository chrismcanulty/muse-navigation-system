import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import SearchBar from '../../components/SearchBar';
import LanguageDropdown from '../../components/LanguageDropdown';
import { Data } from '../../data/Data';
import CategoryList from '../../components/CategoryList';

const Home = () => {
  const [languageAbb, setLanguageAbb] = useState('JA');
  const [results, setResults] = useState<
    { jicfsIdMiddle: number; jicfsNameMiddle: string }[]
  >([]);
  const [clickSearch, setClickSearch] = useState<boolean>(false);
  const [suggestedCategory, setSuggestedCategory] = useState<string | null>('');

  // text converter: https://www.google.co.jp/ime/cgiapi.html
  // Guide: https://qiita.com/akifumii/items/bf1511cb8bc53e12f503

  const searchResults = (searchTerm: string) => {
    let resultArray: { jicfsIdMiddle: number; jicfsNameMiddle: string }[] = [];
    if (searchTerm === '') {
      setResults([]);
      return;
    }
    Data.forEach((item) => {
      let temp = item.jicfsMiddle.reduce((accumulator, element) => {
        if (element.jicfsNameMiddle.includes(searchTerm)) {
          accumulator.push(element);
        }
        return accumulator;
      }, [] as { jicfsIdMiddle: number; jicfsNameMiddle: string }[]);
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
            setSuggestedCategory={setSuggestedCategory}
            languageAbb={languageAbb}
            searchResults={searchResults}
          />
          <CategoryList
            clickSearch={clickSearch}
            languageAbb={languageAbb}
            results={results}
            suggestedCategory={suggestedCategory}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Home;
