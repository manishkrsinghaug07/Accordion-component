import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Accordion from "./components/accordion/Accordion";

const EMPLOYEE_API_URL = "https://jsonplaceholder.typicode.com/posts";
const IMAGE_URL = "https://saketa.com/wp-content/uploads/2022/04/hammad.jpg";

const App = () => {
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(EMPLOYEE_API_URL);
        const result = await response.json();
        setEmployeeData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [employeeData]);
  return (
    employeeData && (
      <Accordion accordionData={employeeData} defaultImageSrc={IMAGE_URL} />
    )
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
