import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';

function App() {
  return (
    <>
      <Typography variant="h1">Welcome to the ReactDex</Typography>
      <Link to={'/pokedex'}>
        <Button variant="contained">
          Pokedex
        </Button>
      </Link>
    </>
  );
}

export default App;
