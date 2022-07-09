import axios from "axios";
import "./NewsSelector.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import getPostsApi from "../../_api/hacker-news";
import {IPostList} from "../../types/news.types"

interface IPostListProps {
  query: string;
  page: number;
  setQuery: (query: string) => void;
  setPostList: Dispatch<SetStateAction<IPostList[]>>;
}

const NewsSelector: React.FC<IPostListProps> = ({query, page, setQuery, setPostList}) => {
  // const [postList, setPostList] = useState<IPostList[] | null>();

  const getAPI = async () => {
    const response = await getPostsApi(query, page);
    setPostList(response)
    return response;
  };

  const handleChange = (event: any): string | null => {
    console.log("event value", event);
    setQuery(event.target.value);
    getAPI();
    return query;
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <section>
      <select
        className="selector"
        onChange={(event: any): any => handleChange(event)}
      >
        <option selected value="angular">
          <div className="select-item">
            <p>Angular</p>
          </div>
        </option>
        <option value="react">Reacts</option>
        <option value="vue">Vue</option>
      </select>
    </section>
  );
};

export default NewsSelector;