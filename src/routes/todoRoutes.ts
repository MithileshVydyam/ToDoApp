import { TodoController } from "./../controller/todoController"
import { Router } from "express";

let todoControllerObj = new TodoController();
export const todoRoutes: Router = Router();

todoRoutes.post('/create', todoControllerObj.createTodo);
todoRoutes.get('/', todoControllerObj.getAllTodo);

