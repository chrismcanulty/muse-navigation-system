import { Grid, ListItemButton, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ItemProp } from '../scenes/home/Home';
import { listItemButtonStyles } from '../constants/constants';

const Item = ({ item }: { item: ItemProp }) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={2} sm={4} md={4}>
      <ListItemButton
        onClick={() => navigate(`item/${item.jicfsIdMiddle}`, { state: item })}
        sx={listItemButtonStyles}
      >
        <ListItemText
          primary={item.jicfsNameMiddle}
          sx={{ textAlign: 'center' }}
        />
      </ListItemButton>
    </Grid>
  );
};

export default Item;
