import express from "express";
import morgan from "morgan";
import taskRouter from "./src/routers/taskRouter.js";

const app = express();
app.use(express.json());
app.use(morgan("tiny"));

const PORT = 8000;

app.use("/api/v1/tasks", taskRouter);

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Server running at port ${PORT}`);
});
