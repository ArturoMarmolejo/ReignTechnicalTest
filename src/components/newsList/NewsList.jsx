import "./NewsList.css";

export default function NewsList() {
  return (
    <section className="news-container wrapper">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
        <div className="new-card" key={index}>
          <div className="new-content">
            <div className="new-date">
              <img src="/assets/images/time.svg" />
              <p>3 hours ago by author</p>
            </div>

            <h3>
              Yes, React is taking over front-end development. The question is
              why.
            </h3>
          </div>
          <div className="new-action">
            <img src="/assets/images/favorite.svg" />
          </div>
        </div>
      ))}
    </section>
  );
}
