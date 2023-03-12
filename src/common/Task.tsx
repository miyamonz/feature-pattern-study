export type Task = {
  id: number;
  name: string;
  priority?: "high" | "medium" | "low";
  completed: boolean;
  dueDate?: string; //YYYY-MM-DD
};

export const initialTasks: Task[] = [
  {
    id: 1,
    name: "洗濯物を干す",
    priority: "low",
    completed: false,
    dueDate: "2022-01-15",
  },
  {
    id: 2,
    name: "買い物に行く",
    priority: "medium",
    completed: false,
    dueDate: "2022-01-20",
  },
  {
    id: 3,
    name: "レポートを書く",
    priority: "high",
    completed: true,
    dueDate: "2022-01-31",
  },
  {
    id: 4,
    name: "掃除をする",
    priority: "low",
    completed: true,
  },
  {
    id: 5,
    name: "プレゼン資料を作成する",
    completed: false,
    dueDate: "2022-02-10",
  },
];
