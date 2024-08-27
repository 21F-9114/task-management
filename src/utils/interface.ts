import Task from "../models/taskModel";
export interface newTaskObj {
    title: string;
    description: string;
    isCompleted: boolean;
    date?: string;
}
export interface updateTaskObj {
    id:number;
    updateData: Partial<Task>;
}
export interface deleteTaskObj{
    id:number;
}
export interface getTaskByIdObj{
    id:number;
}
export interface getAllTasksObj{
    tasks: Task[];}