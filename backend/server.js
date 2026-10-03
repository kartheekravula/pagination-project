const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/paginationDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const studentSchema = new mongoose.Schema({
  name: String,
  department: String,
  year: Number
});

const Student = mongoose.model("Student", studentSchema);

app.get("/api/students", async (req, res) => {

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;

  const skip = (page - 1) * limit;

  const students = await Student.find()
    .skip(skip)
    .limit(limit);

  const totalStudents = await Student.countDocuments();

  res.json({
    students,
    currentPage: page,
    totalPages: Math.ceil(totalStudents / limit),
    totalStudents
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});