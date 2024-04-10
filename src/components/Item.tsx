import { Box, Typography, List, ListItem } from '@mui/material';

const Item = ({ item, width }: { item: string; width: string }) => {
  return <Box width={width}>{item}</Box>;
};

export default Item;
