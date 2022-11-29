import { Categories, IToDo } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING}>Doing</button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO}>To Do</button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE}>Done</button>
      )}
    </li>
  );
}
export default ToDo;
