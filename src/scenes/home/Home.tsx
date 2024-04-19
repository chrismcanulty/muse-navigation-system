import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import SearchBar from '../../components/SearchBar';
import LanguageDropdown from '../../components/LanguageDropdown';
import { Data } from '../../data/Data';
import CategoryList from '../../components/CategoryList';

const Home = () => {
  const [languageAbb, setLanguageAbb] = useState('JA');
  const [resultsToDisplay, setResultsToDisplay] = useState<
    { jicfsIdMiddle: number; jicfsNameMiddle: string }[]
  >([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [suggestedCategory, setSuggestedCategory] = useState<string | null>('');

  // text converter: https://www.google.co.jp/ime/cgiapi.html
  // Guide: https://qiita.com/akifumii/items/bf1511cb8bc53e12f503

  const searchCategory = (searchTerm: string) => {
    let resultArray: { jicfsIdMiddle: number; jicfsNameMiddle: string }[] = [];
    Data.forEach((item) => {
      let temp = item.jicfsMiddle.reduce((accumulator, element) => {
        if (element.jicfsNameMiddle.includes(searchTerm)) {
          accumulator.push(element);
        }
        return accumulator;
      }, [] as { jicfsIdMiddle: number; jicfsNameMiddle: string }[]);
      resultArray = resultArray.concat(temp);
    });
    return resultArray;
  };

  const onSearch = async (searchTerm: string) => {
    setShowResults(false);
    if (!searchTerm) return;
    setSuggestedCategory(null);
    const searchResults = searchCategory(searchTerm);
    if (searchResults.length !== 0) {
      setResultsToDisplay(searchResults);
    }
    setShowResults(true);
    // create a hook to call open API under hooks folder. For example the name could be useCallOpenAI
    // const response = await useCallOpenAI(input);
    // if (response) {
    //   setSuggestedCategory(response.choices[0].message?.content);
    // }
  };

  const searchBarPlaceholder =
    languageAbb === 'JA' ? '商品カテゴリ検索' : 'Product category search';

  return (
    <div className="home">
      <LanguageDropdown
        setLanguageAbb={setLanguageAbb}
        languageAbb={languageAbb}
        // setClickSearch={setClickSearch}
        // setResults={setResults}
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
          <SearchBar placeholder={searchBarPlaceholder} onSearch={onSearch} />
          {showResults && (
            <CategoryList
              // clickSearch={clickSearch}
              languageAbb={languageAbb}
              results={resultsToDisplay}
              suggestedCategory={suggestedCategory}
            />
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Home;
