import React from "react";
import search from './search.svg';

const Search = ({ text, setText }) => {  
  const onType = (e) => {
    setText(e.target.value);
  }

  return (
    <div style={{ height: "60px", backgroundColor: "#FFFFFF", borderRadius: "30px", minWidth: "1450px", display: "flex", alignItems: "center", marginRight: "30px" }}>
        <img src={search} alt={"Search"} style={{ marginLeft: "20px" }} />
        <input value={text} style={{ outline: "none", border: "none", lineHeight: "18px", fontFamily: "Open Sans", fontSize: "18px" }} 
          type="text" autoComplete="off" placeholder="Search..." onChange={onType}/>
    </div>
  );
}
 
export default Search;