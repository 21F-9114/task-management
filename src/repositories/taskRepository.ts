import Task from '../models/taskModel'; 

export class TaskRepository {
    async getAllTasks() {
        return Task.findAll();
    }

    async getTaskById(id: number) {
        return Task.findByPk(id);
    }

    async addTask(title: string, description: string, isCompleted: boolean) {
        return Task.create({ title, description, isCompleted });
        
    }

    async updateTask(id: number, updateData: Partial<Task>) {
        const task = await Task.findByPk(id);
        if (task) {
            return task.update(updateData);
        }
        return null;
    }

    async deleteTask(id: number) {
        const task = await Task.findByPk(id);
        if (task) {
            await task.destroy();
            return true;
        }
        return false;
    }
}
