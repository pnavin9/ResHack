import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Get the root element where the application will be rendered
const container = document.getElementById('root');

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(container);

// Render the root component of the application
root.render(
  <StrictMode>
    {/* ChakraProvider wraps the App component and provides the Chakra UI theme */}
    <ChakraProvider theme={theme}>
      {/* ColorModeScript is used to enable color mode support */}
      <ColorModeScript />
      {/* Render the App component */}
      <App />
    </ChakraProvider>
  </StrictMode>
);
