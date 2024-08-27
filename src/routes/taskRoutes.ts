import express from 'express';
import  {getAllTasks,getTaskById,createTask,updateTask,deleteTask}  from '../controllers/taskController';
const router=express.Router();//isko use krky hum routes bnayeingy

router.get('/tasks',getAllTasks);
router.get('/tasks/:id',getTaskById);
router.post('/tasks',createTask);
router.put('/tasks/:id',updateTask);
router.delete('/tasks/:id',deleteTask);
export default router;