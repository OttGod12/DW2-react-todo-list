import { TaskButton } from "../TaskButton/TaskButton";
import { TaskInput } from "../TaskInput/TaskInput";

export function TaskForm() {
  return (
    <form>
      <TaskInput />
      <TaskButton texto="+" />
    </form>
  );
}
