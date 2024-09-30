import express from "express";
const router = express.Router();

const fakeDB = [];

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
  fakeDB.push(req.body);

  res.json({
    status: "success",
    message: "response from the server on PUT verb",
  });
});

router.delete("/api/v1/tasks", (req, res, next) => {
  // write the code

  res.json({
    status: "success",
    message: "response from the server on DELETE verb",
  });
});

export default router;
