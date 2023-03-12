import { GridItem, Input } from "@chakra-ui/react";
import { Task } from "../common/Task";

export const TaskItem = ({ task }: { task: Task }) => {
  // const [task, setTask] = useAtom(props.taskAtom);
  return (
    <>
      {/* completed */}
      <GridItem>
        <ItemCompleted task={task} />
      </GridItem>
      <GridItem>
        <Input
          value={task.name}
          onChange={(e) => {
            // setTask({ ...task, name: e.target.value });
          }}
        />
      </GridItem>
      <GridItem>
        <ItemPriority task={task} />
      </GridItem>
      <GridItem>{task.dueDate}</GridItem>
    </>
  );
};

const ItemCompleted: React.FC<{ task: Task }> = ({ task }) => (
  <input
    type="checkbox"
    checked={task.completed}
    onChange={(e) => {
      // setTask({ ...task, completed: e.target.checked });
    }}
  />
);

const ItemPriority: React.FC<{ task: Task }> = ({ task }) => {
  const m = {
    high: "🔥",
    medium: "🌟",
    low: "🌱",
  };
  return (
    <>
      {task.priority} {(task.priority && m[task.priority]) ?? ""}
    </>
  );
};
