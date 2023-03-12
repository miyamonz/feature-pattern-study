import { useMemo } from "react";
import { Grid, GridItem, Button, Box } from "@chakra-ui/react";
import { atom, useAtom } from "jotai";

import { initialTasks } from "../common/Task";
import { TaskItem } from "./TaskItem";

import {
  filterByCompletedFnAtom,
  ItemCompleted,
  SelectCompletedCondition,
} from "./completed";
import {
  filterByPriorityFnAtom,
  ItemPriority,
  SelectPriorityCondition,
} from "./priority";

const tasksAtom = atom(initialTasks);

export function Demo() {
  return <TaskApp />;
}
function TaskApp() {
  // 全タスク
  const [tasks, setTasks] = useAtom(tasksAtom);

  // 絞り込み
  const [filterByCompleted] = useAtom(filterByCompletedFnAtom);
  const [filterByPriority] = useAtom(filterByPriorityFnAtom);
  const filteredTasks = useMemo(() => {
    return tasks.filter(filterByCompleted).filter(filterByPriority);
  }, [tasks, filterByCompleted, filterByPriority]);

  return (
    <>
      <div>
        <Box p={2}>
          <SelectCompletedCondition />
        </Box>
        <Box p={2}>
          <SelectPriorityCondition />
        </Box>
      </div>
      <Grid p={2} templateColumns={`3rem 20rem 6rem 6rem`} gap={1}>
        {/* header */}
        <GridItem border="solid 1px">done</GridItem>
        <GridItem border="solid 1px">name</GridItem>
        <GridItem border="solid 1px">priority</GridItem>
        <GridItem border="solid 1px">due date</GridItem>

        {/* tasks */}
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            components={{
              Completed: ItemCompleted,
              Priority: ItemPriority,
            }}
          />
        ))}

        {/* button */}
        <GridItem></GridItem>
        <GridItem>
          <Button
            colorScheme="blue"
            rounded="full"
            onClick={() => {
              setTasks((prev) => [
                ...prev,
                { id: Math.random(), name: "new task", completed: false },
              ]);
            }}
          >
            ＋
          </Button>
        </GridItem>
      </Grid>
    </>
  );
}
