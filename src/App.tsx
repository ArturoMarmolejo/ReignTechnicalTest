import React from 'react';
import './App.css';
import NewsList from './components/newsList/NewsList';
import Header from './layouts/Header';

function App() {
  return (
    <main>
        <Header />
        <NewsList />
    </main>
);
}

export default App;
