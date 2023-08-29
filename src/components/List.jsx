import React, { useState } from "react";

function List(props) {
  let [text, setText] = useState("");

  let filteredText = props.contactProp.filter((item) => {
    return (
      item.fullname
        .toString()
        .toLowerCase()
        .includes(text.toString().toLowerCase()) ||
      item.phoneNumber
        .toString()
        .toLowerCase()
        .includes(text.toString().toLowerCase())
    );
  });
  return (
    <div className="deneme">
      <input
        type="text"
        placeholder="Filter Input"
        name="filterInput"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <ul>
        {filteredText.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phoneNumber} </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
