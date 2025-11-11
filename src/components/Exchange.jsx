import React from "react";

const Exchange = ({ exchanges }) => {
  let lis = Object.keys(exchanges).map((key) => {
    let value = exchanges[key];
    if (key !== value)
      return (
        <li>
          {value} => {key}{" "}
        </li>
      );
  });
  return <ul>{lis}</ul>;
};

export default Exchange;
