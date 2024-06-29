import { useState, Fragment } from "react";
// import { v4 as uuid } from "uuid";

export default function ListItem({
  // index,
  item,
  handleDelete,
  handleCheckBox,
  // checked
}) {
  // const [checked, setChecked] = useState(item.checked);
  // const [id, setId] = useState(uuid());

  // console.log(checked, item, index);
  // function handleCheckbox(value) {
  //   setChecked(value);
  // }

  return (
    <div className="listItem" key={item.id}>
      <label>
        <input
          type="checkbox"
          // key={item.id}
          checked={item.checked}
          onChange={(e) => {
            handleCheckBox(item, e.target.checked);
            // console.log(index, item);
          }}
        />
        {item.checked ? <strike>{item.value}</strike> : item.value}
      </label>
      <button
        onClick={() => {
          handleDelete(item.id);
        }}
      >
        Delete
      </button>
      <br />
    </div>
  );
}
