import React, { useState } from "react";

function Form(props) {
  const [form, setForm] = useState({ fullname: "", phoneNumber: "" });

  let changeValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  let onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phoneNumber === "") return false;
    props.setContactProp([...props.contactProp, form]);
    setForm({ fullname: "", phoneNumber: "" });
  };

  return (
    <form onSubmit={onSubmit} className="addForm">
      <div>
        <input
          type="text"
          placeholder="Enter a Name"
          name="fullname"
          onChange={changeValue}
          value={form.fullname}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter a Phone"
          name="phoneNumber"
          onChange={changeValue}
          value={form.phoneNumber}
        />
      </div>
      <div className="btn">
        <button type="submit">Ekle</button>
      </div>
    </form>
  );
}

export default Form;
