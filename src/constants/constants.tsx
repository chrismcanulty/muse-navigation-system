import { Languages } from '../scenes/home/Home';

// Text placeholders

export const JAPANESE_PLACEHOLDER = '商品カテゴリ検索';
export const ENGLISH_PLACEHOLDER = 'Product category search';
export const JAPANESE_SEARCH_PROMPT = 'ご希望の商品カテゴリをご入力ください';
export const ENGLISH_SEARCH_PROMPT = 'Please select desired product category';
export const AI_SEARCH_ITEM_NOT_FOUND =
  '検索に一致する商品は見つかりませんでした。';

// Text strings dependent on input props

export const searchResultsString = (length: number, language: Languages) => {
  return language === 'JA'
    ? `検索結果${length}件`
    : language === 'EN'
    ? `${length} ${length === 1 ? 'result' : 'results'} found`
    : '';
};
export const AISuggestionString = (language: Languages) => {
  return language === 'JA'
    ? 'この商品カテゴリーをお探しでしょうか：'
    : language === 'EN'
    ? 'Are you looking for this category:'
    : '';
};

// Languages Object

export const APP_LANGUAGES: { abb: Languages; language: string }[] = [
  { abb: 'JA', language: '日本語' },
  { abb: 'EN', language: 'English' },
];

// Style

export const SEARCH_PROMPT_COLOR = '#4285F4';
export const listItemButtonStyles = {
  border: 1,
  borderColor: '#808080',
  borderRadius: '25px',
  '&:hover': {
    borderColor: 'black',
  },
};
export const AISuggestionButtonStyles = {
  paddingLeft: 5,
  paddingRight: 5,
  border: 1,
  borderColor: '#808080',
  borderRadius: '25px',
  '&:hover': {
    borderColor: 'black',
  },
};
// override blue background on autocomplete suggestion which doesn't cover the entire TextField component
export const inputStyle = { WebkitBoxShadow: '0 0 0 1000px white inset' };

// AI instructions

export const OPEN_AI_INSTRUCTIONS = `You will be provided with a search term, and your task is to return the most appropriate JICFS product category (jicfsNameMiddle) from the provided list.
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
          .`;
