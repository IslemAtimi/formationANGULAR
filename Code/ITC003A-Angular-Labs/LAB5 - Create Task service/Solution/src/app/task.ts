
export interface Task{
  id: number;
  description: string;
  completed: boolean;
  priority: Priority;
}
export enum Priority{
  Low = 0,
  Normal = 1,
  High = 2
}