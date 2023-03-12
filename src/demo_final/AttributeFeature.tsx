import { Atom } from "jotai";
import { Task } from "../common/Task";

export type AttributeFeature = {
  id: string;
  TaskAttributeItem: React.FC<{ task: Task }>;
  filterCondition?: Atom<(task: Task) => boolean>;
  ViewToFilter?: React.FC;
};
