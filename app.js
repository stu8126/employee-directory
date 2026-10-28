import express from "express";
import { getEmployee, getEmployees, getRandomEmployee } from "#db/employees";

const app = express();
export default app;

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  const data = getEmployees();
  res.send(data);
});

app.get("/employees/random", (req, res) => {
  const data = getRandomEmployee();
  res.send(data);
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  const data = getEmployee(+id);

  if (!data) {
    return res.status(404).send("Employee not found.");
  }

  res.send(data);
});
