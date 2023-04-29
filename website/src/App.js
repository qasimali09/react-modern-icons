import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/index';
import theme from './theme';
import IconsPage from './pages/icons';
import Header from './components/header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/icons" element={<IconsPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
