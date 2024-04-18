import React, { useRef, useState, ChangeEvent, SetStateAction } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import 'react-simple-keyboard/build/css/index.css';
// import KeyboardWrapper from './KeyboardWrapper';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: `${process.env.REACT_APP_OPENAI_API_KEY}`,
  dangerouslyAllowBrowser: true,
});

const SearchBar = ({
  languageAbb,
  searchResults,
  setClickSearch,
  setSuggestedCategory,
}: {
  languageAbb: string;
  searchResults: any;
  setClickSearch: React.Dispatch<SetStateAction<boolean>>;
  setSuggestedCategory: React.Dispatch<SetStateAction<string | null>>;
}) => {
  const [input, setInput] = useState('');
  const keyboard = useRef<any>();

  const onChangeInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const input = event.target.value;
    setInput(input);
    keyboard?.current?.setInput(input);
  };

  const onClick = async () => {
    setClickSearch(true);
    searchResults(input);
    const response = await callOpenAi(input);
    if (response) {
      setSuggestedCategory(response.choices[0].message?.content);
    }
    console.log('response', response);
  };

  // override blue background on autocomplete suggestion which doesn't cover the entire TextField component
  const inputStyle = { WebkitBoxShadow: '0 0 0 1000px white inset' };

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

  return (
    <>
      {languageAbb === 'JA' && (
        <TextField
          fullWidth
          value={input}
          placeholder="商品カテゴリ検索"
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
      )}
      {languageAbb === 'EN' && (
        <TextField
          fullWidth
          value={input}
          // autoComplete="off"
          placeholder="Product category search"
          sx={{
            marginBottom: '30px',
          }}
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
      )}
      {/* <KeyboardWrapper
        languageAbb={languageAbb}
        keyboardRef={keyboard}
        onChange={setInput}
      /> */}
    </>
  );
};

export default SearchBar;
