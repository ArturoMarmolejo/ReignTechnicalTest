import "./NewsSelector.css";

export default function NewsSelector() {
  return (

    <section>
      <select className="selector">
        <option selected value="">
          Select your news
        </option>
        <option value="">
          <div className="select-item">
            <div>
              <img src="/assets/images/angular-icon.png"/>
            </div>
            <p>Angular</p> 
          </div>
          </option>
        <option value="">Reacts</option>
        <option value="">Vue</option>
      </select>
    </section>
  );
}
