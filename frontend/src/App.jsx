import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:5000/api/students?page=${page}&limit=5`)
      .then((res) => res.json())
      .then((data) => {
        setStudents(data.students);
        setTotalPages(data.totalPages);
      })
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <div>
      <h1>Student Pagination</h1>

      {students.map((student) => (
        <p key={student._id}>
          {student.name} - {student.department} - Year {student.year}
        </p>
      ))}

      <hr />

      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setPage(index + 1)}
          style={{ margin: "5px" }}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>

      <h3>
        Page {page} of {totalPages}
      </h3>
    </div>
  );
}

export default App;