import { Grid, ListItemButton, ListItemText } from '@mui/material';

const Item = ({ item }: { item: string }) => {
  const onClick = () => {
    console.log('clicked!');
  };

  return (
    <Grid item xs={2} sm={4} md={4}>
      <ListItemButton
        onClick={onClick}
        sx={{
          border: 1,
          borderColor: '#808080',
          borderRadius: '25px',
          '&:hover': {
            borderColor: 'black',
          },
        }}
      >
        <ListItemText primary={item} sx={{ textAlign: 'center' }} />
      </ListItemButton>
    </Grid>
  );
};

export default Item;
