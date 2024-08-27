import { Model, DataTypes } from 'sequelize';
import sequelize from '../database'; 

class Task extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
    public isCompleted!: boolean;
}

Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isCompleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        sequelize,
        modelName: 'Task',
        tableName: 'task_management', 
    }
);

export default Task;
