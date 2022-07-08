import { useEffect, useState } from "react";
import "./TabFilter.css";

export default function TabFilter() {

  const [active, setActive] = useState(false)

  const isActive = ():Boolean => {
    setActive(!active)
    console.log('active',active)
    return active;
  } 

  useEffect(()=>{
    isActive()
  },[])
  return (
    <section className="tab-container">
      <button className={`tab-filter${active ? "-active" : ""}`} onClick={isActive}>All</button>
      <button className={`tab-filter${!active ? "-active" : ""}`} onClick={isActive}>My Faves</button>
    </section>
  );
}
