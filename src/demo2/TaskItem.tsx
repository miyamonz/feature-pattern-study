import { GridItem } from "@chakra-ui/react";
import { Task } from "../common/Task";

export const TaskItem = ({
  task,
  components,
}: {
  task: Task;
  components: readonly [string, React.FC<{ task: Task }>][];
}) => {
  return (
    <>
      {components.map(([id, Component]) => (
        <GridItem key={id}>
          <Component task={task} />
        </GridItem>
      ))}
    </>
  );
};
