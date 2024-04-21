import { Box, Button, Grid, Typography } from '@mui/material';
import Item from './Item';
import { useNavigate } from 'react-router-dom';
import { Data } from '../data/Data';
import { ItemProp, Languages, SuggestedCategory } from '../scenes/home/Home';
import {
  AI_SEARCH_ITEM_NOT_FOUND,
  AISuggestionButtonStyles,
  AISuggestionString,
  searchResultsString,
} from '../constants/constants';

type CategoryListProps = {
  results: ItemProp[];
  languageAbb: Languages;
  suggestedCategory: SuggestedCategory;
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
      }, [] as ItemProp[]);
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
          {searchResultsString(resultsLength, languageAbb)}
        </Typography>

        <Box pt={5}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {results.map((item, i) => (
              <Item item={item} key={i} />
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
          data-testid={'click-indicator'}
          onClick={onClick}
          sx={AISuggestionButtonStyles}
        >
          {AISuggestionString(languageAbb)} {suggestedCategory}
        </Button>
      </Typography>
    );
  };

  const shouldDisplayOpenAIResult =
    results.length === 0 &&
    suggestedCategory !== AI_SEARCH_ITEM_NOT_FOUND &&
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
