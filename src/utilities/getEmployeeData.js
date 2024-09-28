import { useState } from "react";
const EMPLOYEE_API_URL = "https://jsonplaceholder.typicode.com/posts";
export const getEmployeeData = () => {
  const result = null;
  fetch(EMPLOYEE_API_URL)
    .then((res) => res.json())
    .finally((result) => {
      debugger;
      return (result = result);
    });
};
