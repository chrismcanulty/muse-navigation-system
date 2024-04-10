import { Box, Typography, useMediaQuery, List } from '@mui/material';
import Item from '../../components/Item';

const CategoryList = ({ results }: { results: string[] }) => {
  const width = '200px';

  return (
    <Box width="80%" margin="50px auto">
      <Typography variant="h5" textAlign="center" marginBottom="50px">
        <b>Search Results</b>
      </Typography>
      <Box
        margin="0 auto"
        // use grid display for responsive resizing based on screen size
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {results.map((item, i) => (
          <Item item={item} width={width} />
        ))}
      </Box>
    </Box>
  );
};

export default CategoryList;
