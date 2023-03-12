import { atom, useAtom } from "jotai";
import { CustomRadioGroup } from "../../common/CustomRadioGroup";
import { Task } from "../../common/Task";
import { AttributeFeature } from "../AttributeFeature";

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

const filterByCompletedFnAtom = atom((get) => {
  return filterByCompleted(get(filterByCompletedAtom));
});

const SelectCompletedCondition = () => {
  const [, setFilterStatus] = useAtom(filterByCompletedAtom);

  return (
    <CustomRadioGroup
      values={["all", "completed", "uncompleted"] as const}
      onChangeValue={setFilterStatus}
    />
  );
};

export const ItemCompleted: React.FC<{ task: Task }> = ({ task }) => (
  <input
    type="checkbox"
    checked={task.completed}
    onChange={(e) => {
      // setTask({ ...task, completed: e.target.checked });
    }}
  />
);

export const featureCompleted: AttributeFeature = {
  id: "completed",
  filterCondition: filterByCompletedFnAtom,
  TaskAttributeItem: ItemCompleted,
  ViewToFilter: SelectCompletedCondition,
};
