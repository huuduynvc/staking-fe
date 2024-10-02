import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  colors: {
    brand: [
      '#FF753A', // Lightest
      '#FF753A',
      '#FF753A',
      '#FDBA74', // Light
      '#FDBA74',
      '#FDBA74',
      '#F97316', // Dark
      '#F97316',
      '#F97316',
      '#EA580C', // Darkest
    ],
  },
  primaryColor: 'brand', // Set the new 
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
