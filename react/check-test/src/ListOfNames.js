import React from "react";

const names = ["Alice", "Bob", "Charlie", "David"];

function ListOfNames() {
  const listNames = names.map((name) => <li>{name}</li>);
  return <ul>{listNames}</ul>;
}
export default ListOfNames;