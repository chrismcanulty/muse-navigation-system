import { Box, Grid, Typography } from '@mui/material';
import Item from '../../components/Item';

const CategoryList = ({
  results,
  languageAbb,
  clickSearch,
}: {
  results: { jicfsIdMiddle: number; jicfsNameMiddle: string }[];
  languageAbb: string;
  clickSearch: boolean;
}) => {
  return (
    <Box width="90%" margin="50px auto">
      <Box
        margin="0 auto"
        // use grid display for responsive resizing based on screen size

        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {clickSearch && (
          <Typography sx={{ display: 'flex', justifyContent: 'center' }}>
            {languageAbb === 'JA' && `検索結果${results.length}件`}
            {languageAbb === 'EN' &&
              results.length !== 1 &&
              `${results.length} results found`}
            {languageAbb === 'EN' &&
              results.length === 1 &&
              `${results.length} result found`}
          </Typography>
        )}
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
      </Box>
    </Box>
  );
};

export default CategoryList;
