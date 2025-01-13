import './App.css';
import MasterPage from './components/MasterPage';
import { Box, Container, CssBaseline } from '@mui/material';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ flex: '1 0 auto' }}>
            <MasterPage />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;
