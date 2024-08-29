import "./App.css";
import { useState, useEffect } from "react";
import { Routes } from "./components";
import Navbar from "./components/Navbar";

function App() {
  const hello = [
    { name: "John", age: 30 },
    { name: "Doe", age: 20 },
    { name: "Smith", age: 25 },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/api/tasks");
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/tasks")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  // count should equal 0
  // console.log(data);
  return (
    <>
      <Navbar />
      {count}
      <button onClick={() => setCount(count + 1)}>Click</button>
      <Routes />
      {/* <h1 className="text-3xl font-bold underline text-red-800">{hello}</h1> */}
      <div>
        {data.map(({ title, description, status, priority }, index) => (
          <div key={index} className="mb-4 p-4 border rounded shadow">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-gray-700">{description}</p>
            <p className="text-gray-500">Status: {status}</p>
            <p className="text-gray-500">Priority: {priority}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
