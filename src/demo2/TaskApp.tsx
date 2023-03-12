import { useMemo } from "react";
import { Grid, GridItem, Button, Box } from "@chakra-ui/react";
import { Atom, atom, useAtom } from "jotai";

import { initialTasks } from "../common/Task";
import { TaskItem } from "./TaskItem";

import { AttributeFeature } from "./AttributeFeature";

import { featureCompleted } from "./attributeFeatures/completed";
import { featurePriority } from "./attributeFeatures/priority";
import { featureName } from "./attributeFeatures/name";
import { featureDueDate } from "./attributeFeatures/dueDate";

const tasksAtom = atom(initialTasks);

type TaskColumnInfo = {
  id: string;
  width: string;
  ColumnHeader: () => JSX.Element;
};

const columns: TaskColumnInfo[] = [
  {
    id: "completed",
    width: "3rem",
    ColumnHeader: () => <GridItem border="solid 1px">done</GridItem>,
  },
  {
    id: "name",
    width: "20rem",
    ColumnHeader: () => <GridItem border="solid 1px">name</GridItem>,
  },
  {
    id: "priority",
    width: "6rem",
    ColumnHeader: () => <GridItem border="solid 1px">priority</GridItem>,
  },
  {
    id: "dueDate",
    width: "8rem",
    ColumnHeader: () => <GridItem border="solid 1px">due date</GridItem>,
  },
];

export function Demo() {
  const features: AttributeFeature[] = [
    featureCompleted,
    featureName,
    featurePriority,
    featureDueDate,
  ];

  const filteredColumns = columns.filter((c) =>
    features.some((f) => f.id === c.id)
  );

  return <TaskApp features={features} columns={filteredColumns} />;
}

function TaskApp({
  features,
  columns,
}: {
  features: AttributeFeature[];
  columns: TaskColumnInfo[];
}) {
  // 全タスク
  const [tasks] = useAtom(tasksAtom);

  // 絞り込み
  const filterFnAtom = useMemo(
    () =>
      joinConditionAtoms(
        features
          .map((f) => f.filterCondition)
          .filter(<T,>(a: T): a is NonNullable<T> => !!a)
      ),
    []
  );
  const [filterFn] = useAtom(filterFnAtom);
  const filteredTasks = useMemo(() => {
    return tasks.filter(filterFn);
  }, [tasks, filterFn]);

  return (
    <>
      {/* filterするためのUI */}
      <div>
        {features.map((feature) => {
          if (feature.ViewToFilter)
            return (
              <Box key={feature.id} p={2}>
                <feature.ViewToFilter />
              </Box>
            );
          return null;
        })}
      </div>

      {/* タスク一覧 */}
      <Grid
        p={2}
        templateColumns={columns.map((c) => c.width).join(" ")}
        gap={1}
      >
        {/* header */}
        {columns.map((c) => (
          <c.ColumnHeader key={c.id} />
        ))}
        {/* tasks */}
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            components={features.map((f) => [f.id, f.TaskAttributeItem])}
          />
        ))}
        {/* button */}
        <GridItem></GridItem> {/* 余白 */}
        <GridItem>
          <AddTaskButton />
        </GridItem>
      </Grid>
    </>
  );
}

const AddTaskButton = () => {
  const [, setTasks] = useAtom(tasksAtom);
  return (
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
  );
};

function joinConditionAtoms<T>(conditionAtoms: Atom<(value: T) => boolean>[]) {
  return atom((get) => {
    const filterFns = conditionAtoms.map((anAtom) => get(anAtom));
    return (v: T) => {
      return filterFns.every((fn) => fn(v));
    };
  });
}
