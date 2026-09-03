import express from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";
import { env } from "./config/env";

export const app = express();

app.use(express.json());
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(morgan("dev"));




/*interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

let todos: Todo[] = [];

// GET /tasks -> listar todas las tareas
app.get("/tasks", (req, res) => {
  res.json(todos);
});

// GET /tasks/:id -> obtener una tarea por id
app.get("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ message: "Tarea no encontrada" });
  }

  res.json(todo);
});

// POST /tasks -> crear una tarea
app.post("/tasks", (req, res) => {
  const { title } = req.body;

  if (!title || typeof title !== "string") {
    return res.status(400).json({ message: "El campo 'title' es obligatorio y debe ser texto" });
  }

  const newTask: Todo = {
    id: Date.now(),
    title,
    completed: false,
  };

  todos.push(newTask);

  res.status(201).json(newTask);
});

// PUT /tasks/:id -> actualizar una tarea por id
app.put("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const { title, completed } = req.body;

  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ message: "Tarea no encontrada" });
  }

  todo.title = title ?? todo.title;
  todo.completed = completed ?? todo.completed;

  res.json(todo);
});

// DELETE /tasks/:id -> eliminar una tarea por id
app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const todoExist = todos.some((t) => t.id === id);

  if (!todoExist) {
    return res.status(404).json({ message: "Tarea no encontrada" });
  }

  todos = todos.filter((t) => t.id !== id);

  res.status(200).json({ message: "Tarea eliminada" });
});

app.listen(env.port, () => {
  console.log(`Server corriendo en puerto: ${env.port}`);
});*/