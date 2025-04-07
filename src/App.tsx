import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {

  return (
      <ThemeProvider theme={theme}>
          <Navbar />
      </ThemeProvider>
  )
}

export default App
