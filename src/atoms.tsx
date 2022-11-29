import { atom } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}
export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}
export const toDoState = atom<IToDo[]>({ key: "toDo", default: [] });
export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});
