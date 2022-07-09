import { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./TabFilter.css";

interface ITabFilterProps {
  currentTab: boolean;
  setCurrentTab: Dispatch<SetStateAction<boolean>>;
}

const TabFilter: React.FC<ITabFilterProps> = ({currentTab, setCurrentTab}) => {

  

  const isActive = ():Boolean => {
    setCurrentTab(!currentTab)
    return currentTab;
  } 

  return (
    <section className="tab-container">
      <button className={`tab-filter${currentTab ? "-active" : ""}`} onClick={isActive}>All</button>
      <button className={`tab-filter${!currentTab ? "-active" : ""}`} onClick={isActive}>My Faves</button>
    </section>
  );
}

export default TabFilter;