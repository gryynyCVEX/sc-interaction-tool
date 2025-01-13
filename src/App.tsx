import './App.css';
import MasterPage from './components/MasterPage';
import { Box, Container, CssBaseline } from '@mui/material';
import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { arbitrum, arbitrumSepolia } from '@reown/appkit/networks'
import { projectId } from "./config";

createAppKit({
  adapters: [new EthersAdapter()],
  networks: [arbitrum, arbitrumSepolia],
  projectId,
  features: {
    analytics: false
  }
})

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
