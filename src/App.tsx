import React from "react";
import "./App.css";
import NewsList from "./components/newsList/NewsList";
import NewsSelector from "./components/NewsSelector/NewsSelector";
import TabFilter from "./components/TabFilter/TabFilter";
import Header from "./layouts/Header";

function App() {
  return (
    <main>
      <Header />
      <div className="wrapper">
        <TabFilter />
        <NewsSelector />
        <NewsList />
      </div>
    </main>
  );
}

export default App;
