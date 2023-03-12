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
    name: "食料品の買い物",
    priority: "high",
    completed: false,
    dueDate: "2022-12-31",
  },
  {
    id: 2,
    name: "掃除",
    priority: "medium",
    completed: false,
    dueDate: "2022-11-30",
  },
  {
    id: 3,
    name: "洗濯",
    priority: "low",
    completed: true,
    dueDate: "2022-11-15",
  },
  {
    id: 4,
    name: "請求書の支払い",
    priority: "high",
    completed: false,
    dueDate: "2022-11-20",
  },
  {
    id: 5,
    name: "英語の勉強",
    priority: "medium",
    completed: false,
    dueDate: "2022-12-15",
  },
  {
    id: 6,
    name: "歯医者に行く",
    priority: "high",
    completed: false,
    dueDate: "2022-11-25",
  },
  {
    id: 7,
    name: "散歩",
    completed: true,
    dueDate: "2022-11-10",
  },
  {
    id: 8,
    name: "プロジェクトの進捗報告",
    priority: "medium",
    completed: false,
    dueDate: "2022-11-17",
  },
  {
    id: 9,
    name: "映画鑑賞",
    completed: true,
    dueDate: "2022-11-12",
  },
  {
    id: 10,
    name: "読書",
    priority: "low",
    completed: false,
    dueDate: "2022-12-10",
  },
];
