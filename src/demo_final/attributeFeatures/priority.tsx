import { atom, useAtom } from "jotai";
import { CustomRadioGroup } from "../../common/CustomRadioGroup";
import { Task } from "../../common/Task";
import { AttributeFeature } from "../AttributeFeature";

type PriorityCondition = "all" | "high" | "medium" | "low";
const filterByPriorityAtom = atom("all" as PriorityCondition);
const filterByPriority = (filterByPriority: PriorityCondition) => {
  return (task: Task) => {
    if (filterByPriority === "all") {
      return true;
    }
    return task.priority === filterByPriority;
  };
};
const filterByPriorityFnAtom = atom((get) => {
  return filterByPriority(get(filterByPriorityAtom));
});

const SelectPriorityCondition = () => {
  const [, set] = useAtom(filterByPriorityAtom);

  return (
    <CustomRadioGroup
      values={["all", "high", "medium", "low"] as const}
      onChangeValue={set}
    />
  );
};

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

export const featurePriority: AttributeFeature = {
  id: "priority",
  filterCondition: filterByPriorityFnAtom,
  TaskAttributeItem: ItemPriority,
  ViewToFilter: SelectPriorityCondition,
};
