import { ListItem, ListItemButton, ListItemText } from '@mui/material';

const Item = ({ item }: { item: string }) => {
  const onClick = () => {
    console.log('clicked!');
  };

  return (
    <ListItem>
      <ListItemButton onClick={onClick}>
        <ListItemText primary={item} />
      </ListItemButton>
    </ListItem>
  );
};

export default Item;
