import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { toDoState, categoryState } from "./../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("toDo", { required: "Please write a To Do" })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
}
export default CreateToDo;
