import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import './App.css'

function App() {
  return (
    <>
      <Typography variant="h1">Welcome to the ReactDex</Typography>
      <Link to={'/pokedex'}>
        <Button variant="contained">Pokedex</Button>
      </Link>
      <Link to={'/chart'}>
        <Button variant="contained">Rechart</Button>
      </Link>
    </>
  );
}

export default App;
