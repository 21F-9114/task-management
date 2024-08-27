import express, { Request, Response } from 'express';
import taskRoutes from './routes/taskRoutes';
import sequelize from './database';
import Task from './models/taskModel';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', taskRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send("Hello Node API");
});

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate().then(()=>{console.log('PostgreSQL DB Connected')});
        //! automatically add db columns for a given model
        //Task.sync({ alter: true });
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
});
