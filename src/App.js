
import React from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import { ThemeProvider } from '@material-ui/styles';
import theme from './components/Theme';


function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Header />
        <Main />
        <Portfolio />
        <About />
        <Contact />
      </ThemeProvider>
    </div>
  );
}

export default App;
