import { atom, useAtom } from "jotai";
import { CustomRadioGroup } from "../common/CustomRadioGroup";
import { Task } from "../common/Task";

type StatusCondition = "all" | "completed" | "uncompleted";
const filterByCompletedAtom = atom("all" as StatusCondition);
const filterByCompleted = (filterByCompleted: StatusCondition) => {
  return (task: Task) => {
    if (filterByCompleted === "completed") {
      return task.completed;
    }
    if (filterByCompleted === "uncompleted") {
      return !task.completed;
    }
    return true;
  };
};

export const filterByCompletedFnAtom = atom((get) => {
  return filterByCompleted(get(filterByCompletedAtom));
});

export const SelectCompletedCondition = () => {
  const [, setFilterStatus] = useAtom(filterByCompletedAtom);

  return (
    <CustomRadioGroup
      values={["all", "completed", "uncompleted"] as const}
      onChangeValue={setFilterStatus}
    />
  );
};

