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
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTaskById = exports.getAllTasks = void 0;
const taskService_1 = require("../services/taskService"); //taskservices will contain the business logic
const taskService = new taskService_1.TaskServices();
//this will interac with task services and then will send appropriate response http
const getAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reqObj = req.body;
        const { Tasks } = req.body;
        const getallTask = yield taskService.getAllTasks(Tasks);
        if (!getallTask) {
            res.status(400).json('message: Error occurred while getting all tasks.');
        }
        res.status(201).json(getallTask);
    }
    catch (error) {
        res.status(500).send("Internal Server Error");
    }
});
exports.getAllTasks = getAllTasks;
const getTaskById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reqObj = req.body;
        const { id } = req.body;
        const getTask = yield taskService.getTaskById(id);
        if (!getTask) {
            res.status(400).json('message: Error occurred while getting task.');
        }
        res.status(201).json(getTask);
    }
    catch (error) {
        res.status(500).send("Internal Server Error");
    }
});
exports.getTaskById = getTaskById;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reqObj = req.body;
        const { title, description, isCompleted } = req.body;
        const newTask = yield taskService.createTask(title, description, isCompleted);
        if (!newTask) {
            res.status(400).json('message: Error occurred while creating new task.');
        }
        res.status(201).json(newTask);
    }
    catch (error) {
        res.status(500).send("Internal Server Error");
    }
});
exports.createTask = createTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reqObj = req.body;
        const { id, updateData } = req.body;
        const updatedTask = yield taskService.updateTask(id, updateData);
        if (!updatedTask) {
            res.status(200).json('message: Error occurred while creating new task.');
        }
        res.status(201).json(updatedTask);
    }
    catch (error) {
        res.status(500).send("Internal Server Error");
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reqObj = req.body;
        const { id } = req.body;
        const deletedTask = yield taskService.deleteTask(id);
        if (!deletedTask) {
            res.status(200).json('message: Error occurred while deleting task.');
        }
        res.status(201).json(deletedTask);
    }
    catch (error) {
        res.status(500).send("Internal Server Error");
    }
});
exports.deleteTask = deleteTask;
