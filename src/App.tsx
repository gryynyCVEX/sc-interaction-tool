import './App.css';
import MasterPage from './components/MasterPage';
import { Box, Container, CssBaseline } from '@mui/material';
import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { arbitrum, arbitrumSepolia } from '@reown/appkit/networks'
import { projectId } from "./config";

const metadata = {
  name: 'SCIT',
  description: 'SCIT is a tool for interacting with smart contracts on the blockchain.',
  url: 'https://sc-interaction-tool.onrender.com/', // origin must match your domain & subdomain
  icons: ['https://sc-interaction-tool.onrender.com/logo512.png']
}

createAppKit({
  adapters: [new EthersAdapter()],
  networks: [arbitrum, arbitrumSepolia],
  projectId,
  metadata,
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
