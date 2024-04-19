import { Box, Button, Grid, Typography } from '@mui/material';
import Item from './Item';
import { useNavigate } from 'react-router-dom';
import { Data } from '../data/Data';

type CategoryListProps = {
  results: { jicfsIdMiddle: number; jicfsNameMiddle: string }[];
  languageAbb: string;
  suggestedCategory: string | null;
};

const CategoryList = ({
  results,
  languageAbb,
  suggestedCategory,
}: CategoryListProps) => {
  const navigate = useNavigate();

  const findItemId = () => {
    let targetObj = { jicfsIdMiddle: 0, jicfsNameMiddle: '' };
    if (suggestedCategory === null) {
      return;
    }
    Data.forEach((item) => {
      item.jicfsMiddle.reduce((accumulator, element) => {
        if (element.jicfsNameMiddle.includes(suggestedCategory)) {
          targetObj = element;
        }
        return accumulator;
      }, [] as { jicfsIdMiddle: number; jicfsNameMiddle: string }[]);
    });
    return targetObj.jicfsIdMiddle;
  };

  const onClick = () => {
    const id = findItemId();
    navigate(`item/${id}`, {
      state: { jicfsIdMiddle: id, jicfsNameMiddle: suggestedCategory },
    });
  };

  const DisplayResults = () => {
    const resultsLength = results.length;
    return (
      <>
        <Typography sx={{ display: 'flex', justifyContent: 'center' }}>
          {languageAbb === 'JA' && `検索結果${resultsLength}件`}
          {languageAbb === 'EN' &&
            `${resultsLength} ${
              resultsLength === 1 ? 'result' : 'results'
            } found`}
        </Typography>

        <Box pt={5}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {results.map((item, i) => (
              <Item item={item} />
            ))}
          </Grid>
        </Box>
      </>
    );
  };

  const DisplayOpenAIResult = () => {
    return (
      <Typography
        marginTop={5}
        sx={{
          textAlign: 'center',
        }}
      >
        <Button
          onClick={onClick}
          sx={{
            paddingLeft: 5,
            paddingRight: 5,
            border: 1,
            borderColor: '#808080',
            borderRadius: '25px',
            '&:hover': {
              borderColor: 'black',
            },
          }}
        >
          Are you looking for this category: {suggestedCategory}
        </Button>
      </Typography>
    );
  };

  const shouldDisplayOpenAIResult =
    results.length === 0 &&
    suggestedCategory !== '検索に一致する商品は見つかりませんでした。' &&
    !!suggestedCategory;

  return (
    <Box width="90%" margin="50px auto">
      <Box
        margin="0 auto"
        // use grid display for responsive resizing based on screen size

        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {shouldDisplayOpenAIResult ? (
          <DisplayOpenAIResult />
        ) : (
          <DisplayResults />
        )}
      </Box>
    </Box>
  );
};

export default CategoryList;
