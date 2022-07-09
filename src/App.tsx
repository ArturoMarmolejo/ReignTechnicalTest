import React, { useState } from "react";
import "./App.css";
import NewsList from "./components/NewsList/NewsList";
import NewsSelector from "./components/NewsSelector/NewsSelector";
import Pagination from "./components/Pagination/Pagination";
import TabFilter from "./components/TabFilter/TabFilter";
import Header from "./layouts/Header";
import { IPostList } from "./types/news.types";

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [postList, setPostList] = useState<IPostList[]>([])
  const [currentTab, setCurrentTab] = useState<boolean>(false)

  return (
    <main>
      <Header />
      <div className="wrapper">
        <TabFilter currentTab={currentTab} setCurrentTab={setCurrentTab}/>
        <NewsSelector query={query} page={page} setQuery={setQuery} setPostList={setPostList} />
        <NewsList query={query} page={page} postList={postList} setPage={setPage} setPostList={setPostList} currentTab={currentTab} />
      </div>
    </main>
  );
};

export default App;
