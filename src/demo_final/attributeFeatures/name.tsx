import { Input } from "@chakra-ui/react";
import { atom, useAtom } from "jotai";

import { Task } from "../../common/Task";
import { AttributeFeature } from "../AttributeFeature";

const Item: React.FC<{ task: Task }> = ({ task }) => (
  <Input
    value={task.name}
    onChange={(e) => {
      // setTask({ ...task, name: e.target.value });
    }}
  />
);

export const featureName: AttributeFeature = {
  id: "name",
  TaskAttributeItem: Item,
  // filterCondition: ,
  // ViewToFilter: ,
};
