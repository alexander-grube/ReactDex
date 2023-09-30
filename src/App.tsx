import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import './App.css';

function App() {
  return (
    <>
      <Typography variant="h1" className="text-cyan-500 !font-medium">
        Welcome to the ReactDex
      </Typography>
      <div className='flex space-x-4'>
        <Link to={'/pokedex'}>
          <Button variant="contained">Pokedex</Button>
        </Link>
        <Link to={'/chart'}>
          <Button variant="contained">Rechart</Button>
        </Link>
        <Link to={'/jotai-test'}>
          <Button variant="contained">Jotai Test</Button>
        </Link>
      </div>
    </>
  );
}

export default App;
