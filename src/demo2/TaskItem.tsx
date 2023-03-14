import { GridItem } from "@chakra-ui/react";
import { Task } from "../common/Task";

export const TaskItem = ({
  task,
  components,
}: {
  task: Task;
  components: readonly [string, React.FC<{ task: Task }>][];
}) => {
  // TaskItemはカラムに依存するため、components経由でほとんど内容が確定してしまうので、結果として内容が殆どなくなった
  // もっと明示的にこの中身を書きたい場合は、componentsの代わりに、内容に関するRecordを受けて、keyで個別に必要なものを取り出す、などが考えられる
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
