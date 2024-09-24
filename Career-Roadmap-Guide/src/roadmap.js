import React from "react";
// import "./styles.css";
import { Chrono } from "react-chrono";

export default function Roadmap(item) {
  return (
    <div className="App">
      <div style={{ width: "100rem", height: "95vh" }}>
        <Chrono
          items={item.data}
          mode="VERTICAL"
          cardHeight={250}
          scrollable={{ scrollbar: false }}
        />
      </div>
    </div>
  );
}
