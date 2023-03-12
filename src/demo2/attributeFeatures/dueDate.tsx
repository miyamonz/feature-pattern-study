import { Input } from "@chakra-ui/react";
import { atom, useAtom } from "jotai";

import { Task } from "../../common/Task";
import { AttributeFeature } from "../AttributeFeature";

const Item: React.FC<{ task: Task }> = ({ task }) => {
  if (!task.dueDate) return <></>;
  return (
    <input
      type="date"
      value={task.dueDate}
      onChange={(e) => {
        // setTask({ ...task, dueDate: e.target.value });
      }}
    />
  );
};

export const featureDueDate: AttributeFeature = {
  id: "dueDate",
  TaskAttributeItem: Item,
  // filterCondition: ,
  // ViewToFilter: ,
};
