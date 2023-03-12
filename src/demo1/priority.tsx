import { atom, useAtom } from "jotai";
import { CustomRadioGroup } from "../common/CustomRadioGroup";
import { Task } from "../common/Task";

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
export const filterByPriorityFnAtom = atom((get) => {
  return filterByPriority(get(filterByPriorityAtom));
});

export const SelectPriorityCondition = () => {
  const [, set] = useAtom(filterByPriorityAtom);

  return (
    <CustomRadioGroup
      values={["all", "high", "medium", "low"] as const}
      onChangeValue={set}
    />
  );
};

export const ItemPriority: React.FC<{ task: Task }> = ({ task }) => {
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
