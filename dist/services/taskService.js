"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskServices = void 0;
const taskRepository_1 = require("../repositories/taskRepository");
class TaskServices {
    constructor() {
        this.repository = new taskRepository_1.TaskRepository();
    }
    getAllTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.getAllTasks();
        });
    }
    getTaskById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.getTaskById(id);
        });
    }
    createTask(title, description, isCompleted) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.repository.addTask(title, description, isCompleted);
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    updateTask(id, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.updateTask(id, updateData);
        });
    }
    deleteTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.deleteTask(id);
        });
    }
}
exports.TaskServices = TaskServices;
