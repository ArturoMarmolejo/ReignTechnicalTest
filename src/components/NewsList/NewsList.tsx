import { Dispatch, SetStateAction, useState } from "react";
import Pagination from "../Pagination/Pagination";
import "./NewsList.css";
import { IPostList } from "../../types/news.types";
import getPostsApi from "../../_api/hacker-news";
import moment from "moment";


interface INewsListProps {
  postList: IPostList[];
  query: string;
  page: number;
  currentTab: boolean;
  setPage: Dispatch<SetStateAction<number>>;
  setPostList: Dispatch<SetStateAction<IPostList[]>>;
}

const NewsList: React.FC<INewsListProps> = ({
  postList,
  query,
  page,
  currentTab,
  setPage,
  setPostList,
}) => {
  const favStorageString = localStorage.getItem("favId")
  const favStorage = favStorageString ? JSON.parse(favStorageString) : []

  const favPostString = localStorage.getItem("favPost")
  const favPostStorage = favPostString ? JSON.parse(favPostString) : []


  const [favoritesId, setFavoritesId] = useState<string[]>(favStorage)
  const [favoritePosts, setFavoritePosts] = useState<IPostList[]>(favPostStorage)

  const changePagination = async (currentPage: number) => {
    const response = await getPostsApi(query, currentPage);
    setPostList(response);
    setPage(currentPage);
  }

  const saveFavorite = (id: string, post: IPostList): void => {
    const postFavStorage = localStorage.getItem("favId");
    const favPostListStorage = localStorage.getItem("favPost")
    if (!postFavStorage) {
      const postFavoriteId:string[] = [id];
      const postFavorite:IPostList[] = [post];
      localStorage.setItem("favId", JSON.stringify(postFavoriteId));
      localStorage.setItem("favPost", JSON.stringify(postFavorite));
      setFavoritesId(postFavoriteId)
      setFavoritePosts(postFavorite)
    } else {
      const postFavoriteId = JSON.parse(postFavStorage);
      const postFavorite = favPostListStorage ? JSON.parse(favPostListStorage) : []
      const index = postFavoriteId.indexOf(id);
      console.log('index', index, postFavoriteId)
      if (index >= 0) {
        postFavoriteId.splice(index, 1);
        postFavorite.splice(index, 1);
        localStorage.setItem("favId", JSON.stringify(postFavoriteId));
        localStorage.setItem("favPost", JSON.stringify(postFavorite));
        setFavoritesId(postFavoriteId)
        setFavoritePosts(postFavorite)
        setPostList((state) =>
          state.map((item) =>
            item.objectID === id ? { ...item, isFav: false } : item
          )
        );
        return
      } else {
        postFavoriteId.push(id)
        postFavorite.push(post)
        localStorage.setItem("favId", JSON.stringify(postFavoriteId));
        localStorage.setItem("favPost", JSON.stringify(postFavorite));
        setFavoritesId(postFavoriteId)
        setFavoritePosts(postFavorite)
      }
    }

    setPostList((state) =>
      state.map((item) =>
        item.objectID === id ? { ...item, isFav: true } : item
      )
    );
  };

  

  return (
    <>
      <section className="news-container">
        {(!currentTab ? postList : favoritePosts).map(
          (
            item,
            index
          ) => {
            const { created_at, author, story_title, story_url, objectID, isFav } = item
            if (created_at && author && story_title && story_url) {
              return (
                <div className="new-card" key={index}>
                  <div className="new-content">
                    <div className="new-date">
                      <img src="/assets/images/time.svg" />
                      <p>{`${moment(created_at).fromNow()} by ${author}`}</p>
                    </div>

                    <h3>
                      <a href={`${story_url}`}>{story_title}</a>
                    </h3>
                  </div>
                  <div className="new-action">
                    <img
                      src={
                        isFav || favoritesId.includes(objectID)
                          ? "/assets/images/favorite.svg"
                          : "/assets/images/favorite-bgless.svg"
                      }
                      onClick={() => saveFavorite(objectID, item )}
                    />
                  </div>
                </div>
              );
            }
          }
        )}
      </section>
      {!currentTab && <Pagination total={50} totalButtons={9} onChange={changePagination} />}
    </>
  );
};

export default NewsList;
