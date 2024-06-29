import ListItem from "./ListItem";
import { v4 as uuid } from "uuid";

export default function List({ todoList, handleDelete, handleCheckBox }) {
  return (
    <div>
      {todoList.map((item, index) => (
        <ListItem
          key={item.id}
          // index={index}
          item={item}
          handleDelete={handleDelete}
          handleCheckBox={handleCheckBox}
        />
      ))}
    </div>
  );
}
