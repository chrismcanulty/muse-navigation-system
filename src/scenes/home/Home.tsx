import {
  Box,
  useMediaQuery,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
  const onClick = () => {
    console.log('clicked!');
  };

  return (
    <div className="home">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="300px"
        margin="200px"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ width: '700px' }}
        >
          <Typography
            variant="h6"
            color="#4285F4"
            sx={{ marginBottom: '40px' }}
          >
            ご希望の商品カテゴリをご入力ください
          </Typography>
          <TextField
            fullWidth
            placeholder="商品カテゴリ検索"
            InputProps={{
              style: {
                borderRadius: '25px',
              },
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={onClick}
                    // onMouseDown={handleMouseDownPassword}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Home;
