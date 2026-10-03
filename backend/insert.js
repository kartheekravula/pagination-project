const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/paginationDB")
  .then(() => console.log("MongoDB Connected"));

const studentSchema = new mongoose.Schema({
  name: String,
  department: String,
  year: Number
});

const Student = mongoose.model("Student", studentSchema);

const students = [];

for (let i = 1; i <= 25; i++) {
  students.push({
    name: "Student " + i,
    department: "CSE (DS)",
    year: 2
  });
}

Student.insertMany(students)
  .then(() => {
    console.log("25 students inserted");
    mongoose.connection.close();
  });