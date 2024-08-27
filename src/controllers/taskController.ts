import { Request, Response } from 'express';
import { TaskServices } from '../services/taskService';//taskservices will contain the business logic
import {deleteTaskObj, getAllTasksObj, getTaskByIdObj, newTaskObj, updateTaskObj} from '../utils/interface'

const taskService = new TaskServices();
//this will interac with task services and then will send appropriate response http
export const getAllTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const reqObj: getAllTasksObj = req.body;
        const { } = req.body;
        const Alltasks = await taskService.getAllTasks();
        if (!Alltasks) {
            res.status(400).json('message: Error occurred while getting task.')
        }
        res.status(200).json(Alltasks);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
    // try {
    //     const allTasks = await taskService.getAllTasks();
    //     res.status(200).json(allTasks); 
    // } catch (error) {
    //     res.status(500).send("Internal Server Error");
    // }

};

export const getTaskById = async (req: Request, res: Response): Promise<void> => {
    try {
        const reqObj: getTaskByIdObj = req.body;
        const { id } = req.body;
        const getTask = await taskService.getTaskById(id);
        if (!getTask) {
            res.status(400).json('message: Error occurred while getting task.')
        }
        res.status(201).json(getTask);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};

export const createTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const reqObj: newTaskObj = req.body;
        const { title, description, isCompleted } = req.body;
        const newTask = await taskService.createTask(title, description, isCompleted);
        if (!newTask) {
            res.status(400).json('message: Error occurred while creating new task.')
        }
        res.status(201).json(newTask);
    } catch (error) {
        // const reqObj: newTaskObj = req.body;
        // const { title, description, isCompleted } = req.body;
        // const newTask = await taskService.createTask(title, description, isCompleted);
        // res.status(201).json(newTask);
        res.status(500).send("Internal Server Errorsss");
    }
};

export const updateTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const reqObj: updateTaskObj=req.body;
        const{id,updateData}=req.body;
        const updatedTask = await taskService.updateTask(id,updateData);
        if (!updatedTask) {
            res.status(200).json('message: Error occurred while updating task.');
        } 
        res.status(201).json(updatedTask);
    }
        
     catch (error) {
        res.status(500).send("Internal Server Error");
    }
};

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const reqObj: deleteTaskObj=req.body;
        const{id}=req.body;
        const deletedTask = await taskService.deleteTask(id);
        if (!deletedTask) {
            res.status(200).json('message: Error occurred while deleting task.');
        } 
        res.status(201).json(deletedTask);
    }
        
     catch (error) {
        res.status(500).send("Internal Server Error");
    }
};

