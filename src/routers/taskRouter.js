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

router.all("/", (req, res, next) => {
  console.log("generic");
  next();
});

router.post("/", (req, res, next) => {
  fakeDB.push(req.body);
  console.log(fakeDB);

  res.json({
    status: "success",
    message: "Data has been added successfully to the Server",
  });
});

router.get("/", (req, res, next) => {
  res.json({
    status: "success",
    tasks: fakeDB,
    message: `${fakeDB.length} tasks found`,
  });
});

router.get("/singleTask", (req, res, next) => {
  const id = +req.query.id;
  const task = fakeDB.filter((task) => task.id === id);

  res.json({
    status: "success",
    tasks: task,
  });
});

router.put("/", (req, res, next) => {
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

router.delete("/:id", (req, res, next) => {
  const idParams = req.params.id;
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
