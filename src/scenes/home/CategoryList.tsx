import { Box, List, Typography } from '@mui/material';
import Item from '../../components/Item';

const CategoryList = ({
  results,
  languageAbb,
}: {
  results: string[];
  languageAbb: string;
}) => {
  return (
    <Box width="80%" margin="50px auto">
      <Box
        margin="0 auto"
        // use grid display for responsive resizing based on screen size
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        <Typography>
          {languageAbb === 'JA' && `検索結果${results.length}件`}
          {languageAbb === 'EN' && `We found ${results.length} results`}
        </Typography>
        <List>
          {results.map((item, i) => (
            <Item item={item} />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default CategoryList;