import { Grid, ListItemButton, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Item = ({
  item,
}: {
  item: { jicfsIdMiddle: number; jicfsNameMiddle: string };
}) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={2} sm={4} md={4}>
      <ListItemButton
        onClick={() => navigate(`item/${item.jicfsIdMiddle}`, { state: item })}
        sx={{
          border: 1,
          borderColor: '#808080',
          borderRadius: '25px',
          '&:hover': {
            borderColor: 'black',
          },
        }}
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
