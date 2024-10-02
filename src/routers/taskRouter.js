import express from "express";
const router = express.Router();

let fakeDB = [
  {
    id: 1,
    task: "Cooking",
    hour: 6,
  },
  {
    id: 2,
    task: "Coding",
    hour: 6,
  },
];

router.all("/api/v1/tasks", (req, res, next) => {
  // write the code
  console.log("generic");
  next();
});

router.post("/api/v1/tasks", (req, res, next) => {
  // write the code
  fakeDB.push(req.body);
  console.log(fakeDB);

  res.json({
    status: "success",
    message: "Data has been added successfully to the Server",
  });
});

router.get("/api/v1/tasks", (req, res, next) => {
  // write the code

  res.json({
    status: "success",
    tasks: fakeDB,
    message: `${fakeDB.length} tasks found`,
  });
});

router.put("/api/v1/tasks", (req, res, next) => {
  // write the code
  const id = +req.body.id;
  fakeDB = fakeDB.map((task) =>
    task.id === id ? { ...task, ...req.body } : task
  );

  res.json({
    status: "success",
    tasks: fakeDB,
    message: "response from the server on PUT verb",
  });
});

router.delete("/api/v1/tasks/:id", (req, res, next) => {
  const { id } = req.body;
  console.log(typeof id);
  fakeDB = fakeDB.filter((task) => task.id !== id);
  console.log("From Delete Route: ", fakeDB);

  res.json({
    status: "success",
    message: `item with id ${id} is deleted`,
  });
});

export default router;
