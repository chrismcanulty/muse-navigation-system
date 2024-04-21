import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import SearchBar from '../../components/SearchBar';
import LanguageDropdown from '../../components/LanguageDropdown';
import { Data } from '../../data/Data';
import CategoryList from '../../components/CategoryList';
import {
  ENGLISH_PLACEHOLDER,
  ENGLISH_SEARCH_PROMPT,
  JAPANESE_PLACEHOLDER,
  JAPANESE_SEARCH_PROMPT,
  SEARCH_PROMPT_COLOR,
} from '../../constants/constants';
// to resolve jest testing error: `this environment is missing the following Web Fetch API type: fetch is not defined.`
import 'openai/shims/node';
import { openAi } from '../../api/openAI';

export type ItemProp = { jicfsIdMiddle: number; jicfsNameMiddle: string };
export type Languages = 'EN' | 'JA';
export type SuggestedCategory = string | null;

const Home = () => {
  const [languageAbb, setLanguageAbb] = useState<Languages>('JA');
  const [resultsToDisplay, setResultsToDisplay] = useState<ItemProp[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [suggestedCategory, setSuggestedCategory] =
    useState<SuggestedCategory>('');

  const searchCategory = (searchTerm: string) => {
    let resultArray: ItemProp[] = [];
    Data.forEach((item) => {
      let temp = item.jicfsMiddle.reduce((accumulator, element) => {
        if (element.jicfsNameMiddle.includes(searchTerm)) {
          accumulator.push(element);
        }
        return accumulator;
      }, [] as ItemProp[]);
      resultArray = resultArray.concat(temp);
    });
    return resultArray;
  };

  const onSearch = async (searchTerm: string) => {
    setShowResults(false);
    setResultsToDisplay([]);
    setSuggestedCategory(null);
    if (!searchTerm) return;

    const searchResults = searchCategory(searchTerm);
    if (searchResults.length !== 0) {
      setResultsToDisplay(searchResults);
      setShowResults(true);
      return;
    }
    // if there are no direct results, we ask open ai for suggested category
    const response = await openAi(searchTerm);
    if (response) {
      setSuggestedCategory(response.choices[0].message?.content);
    }
    setShowResults(true);
  };

  const searchBarPlaceholder =
    languageAbb === 'JA' ? JAPANESE_PLACEHOLDER : ENGLISH_PLACEHOLDER;

  return (
    <div data-testid="home" className="home">
      <LanguageDropdown
        setLanguageAbb={setLanguageAbb}
        languageAbb={languageAbb}
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
            color={SEARCH_PROMPT_COLOR}
            sx={{ marginBottom: '40px' }}
          >
            {languageAbb === 'JA' && JAPANESE_SEARCH_PROMPT}
            {languageAbb === 'EN' && ENGLISH_SEARCH_PROMPT}
          </Typography>
          <SearchBar placeholder={searchBarPlaceholder} onSearch={onSearch} />
          {showResults && (
            <CategoryList
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
