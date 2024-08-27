import { TaskRepository } from '../repositories/taskRepository';
import Task from '../models/taskModel';
export class TaskServices {
    private repository: TaskRepository;

    constructor() {
        this.repository = new TaskRepository();
    }

    async getAllTasks(id:number) {
        return this.repository.getAllTasks(id);
    }

    async getTaskById(id: number) {
        return this.repository.getTaskById(id);
    }

    async createTask(title: string, description: string, isCompleted: boolean) {
        try {
            return this.repository.addTask(title, description, isCompleted);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async updateTask(id: number, updateData: Partial<Task>) {
        return this.repository.updateTask(id, updateData);
    }

    async deleteTask(id: number) {
        return this.repository.deleteTask(id);
    }
}
