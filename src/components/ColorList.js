import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
    "blue",
  ];

  const colorElements = colors.map((color) => {
    //adding a key to each element so that react can keep track of it
    //we are going to make the name of each color its key because keys have to be unique
    //key props don't show up with the rest of the props in our function because it is meant to be used internally by React

    return (
      <li key={color} style={{ color: color }}>
        {color}
      </li>
    );
    //here we added a style attribute that allows the text color to change according to what color is written
  });

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>{colorElements}</ol>
    </div>
  );
}

//Assigning key with objects its often best to use the id as the key
/**
 * const users = [
  { id: 1, firstName: "Duane", lastName: "Watson" },
  { id: 2, firstName: "Duane", lastName: "Johnson" },
];

const userHeadings = users.map((user) => {
  return <h1 key={user.id}>{user.firstName}</h1>;
});
 */

export default ColorList;
