import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import SearchBar from '../../components/SearchBar';
import LanguageDropdown from '../../components/LanguageDropdown';
import { Data } from '../../data/Data';
import CategoryList from '../../components/CategoryList';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: `${process.env.REACT_APP_OPENAI_API_KEY}`,
  dangerouslyAllowBrowser: true,
});

const Home = () => {
  const [languageAbb, setLanguageAbb] = useState('JA');
  const [resultsToDisplay, setResultsToDisplay] = useState<
    { jicfsIdMiddle: number; jicfsNameMiddle: string }[]
  >([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [suggestedCategory, setSuggestedCategory] = useState<string | null>('');

  const callOpenAi = (input: string) => {
    return openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You will be provided with a search term, and your task is to return the most appropriate JICFS product category (jicfsNameMiddle) from the provided list.
        Note, if there is no appropriate product category, return the string '検索に一致する商品は見つかりませんでした。'
        Here is the list of JICFS product categories:
          jicfsNameMiddle
          加工食品
          生鮮食品
          菓子
          飲料・酒類
          その他食品
          日用雑貨
          OTC医薬品類
          化粧品
          家庭用品
          DIY用品
          ペット用品
          その他日用品
          文具・事務用品・情報文具
          玩具
          書籍
          楽器・音響ソフト
          情報機器
          その他文化用品
          家具
          車両用品
          時計・メガネ
          光学・写真関連品
          家電
          その他耐久消費財
          衣料・衣服
          寝具・寝装品
          身の回り品
          靴・履物
          スポーツ用品
          その他商品
          .`,
        },
        {
          role: 'user',
          content: input,
        },
      ],
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1,
    });
  };

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
    setResultsToDisplay([]);
    setSuggestedCategory(null);
    if (!searchTerm) return;
    const searchResults = searchCategory(searchTerm);
    if (searchResults.length !== 0) {
      setResultsToDisplay(searchResults);
    }
    const response = await callOpenAi(searchTerm);
    if (response) {
      setSuggestedCategory(response.choices[0].message?.content);
    }
    setShowResults(true);
  };

  const searchBarPlaceholder =
    languageAbb === 'JA' ? '商品カテゴリ検索' : 'Product category search';

  return (
    <div className="home">
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
            color="#4285F4"
            sx={{ marginBottom: '40px' }}
          >
            {languageAbb === 'JA' && 'ご希望の商品カテゴリをご入力ください'}
            {languageAbb === 'EN' && 'Please select desired product category'}
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
