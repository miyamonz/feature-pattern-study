import { GridItem, Input } from "@chakra-ui/react";
import { Task } from "../common/Task";

export const TaskItem = ({
  task,
  components,
}: {
  task: Task;
  components: Record<string, React.FC<{ task: Task }>>;
}) => {
  // const [task, setTask] = useAtom(props.taskAtom);
  return (
    <>
      <GridItem>
        <components.Completed task={task} />
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
        <components.Priority task={task} />
      </GridItem>
      <GridItem>{task.dueDate}</GridItem>
    </>
  );
};
