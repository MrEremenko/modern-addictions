import React, { useState, useEffect } from "react";

const Card = ({ title, author, summary, color, sources, keywords, categories }) => {

  const [open, setOpen] = useState(false);
  const [borderRadius, setBorderRadius] = useState('10px')
  const clicked = () => {
    setOpen(!open);
  }



  return (
    <div style={{ display: "flex", margin: "10px", borderRadius: borderRadius, borderStyle: "solid" }} onClick={clicked}>
      <div style={{ display: "flex", flex: "2 2 0", flexDirection: "column", padding: "5px",
          borderTopLeftRadius: borderRadius, borderBottomLeftRadius: borderRadius, backgroundColor: color }}>
        <div style={{ fontSize: "30px" }}>{title}</div>
        <div style={{ fontSize: "12px", display: "flex" }}>
          Keywords:
          {
            keywords.map(keyword => {
              return <div style={{ fontSize: "13px", margin: "0px 5px" }}>{keyword}</div>
            })
          }
        </div>
        <div style={{ fontSize: "19px", marginTop: "10px" }}>Statement</div>
        <div style={{ fontSize: "15px" }}>{summary}</div>
      </div>
      <div style={{ display: "flex", flex: "1 1 0", flexDirection: "column" }}>
        <div style={{ margin: "5px" }}>
          <div>Related sources:</div>
          <ul>
            { sources && sources.length > 0 &&
              sources.map(source => {
                return (
                  <li>
                    <a href={source.link} target="_blank">{source.link}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}
 
export default Card;