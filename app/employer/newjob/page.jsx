"use client"
import React, { useState } from 'react'
import axios from "axios";

function Page() {
  const initialData = { jobtitle: "", experience: "", descreption: "" };
  const [inputData, setInputdata] = useState(initialData);
  const [submittedData, setSubmittedData] = useState([]);

  const handleData = (e) => {
    setInputdata({ ...inputData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users", inputData)
      .then((response) => {
        setSubmittedData([...submittedData, inputData]);
        setInputdata(initialData); // Reset input fields after submission
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
      });
  }

  return (
    <>
      <form>
        <label>Job title :</label>
        <input type="text" name="jobtitle" value={inputData.jobtitle} onChange={handleData} placeholder='xyz' /><br /><br />
        <label>Experience :</label>
        <input type="text" name="experience" value={inputData.experience} onChange={handleData} placeholder='0-10' /><br /><br />
        <label>Job Description :</label>
        <textarea type="text" name="descreption" value={inputData.descreption} onChange={handleData} placeholder='type here' /><br /><br />
        <button onClick={handleSubmit} type="submit">Submit</button>
      </form>
      <br />
      <table>
        <thead>
          <tr>
          <th>Id</th>
            <th>Job Title</th>
            <th>Experience</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {submittedData.map((data, index) => (
            <tr key={index}>
               <td>{data.id}</td>
              <td>{data.jobtitle}</td>
              <td>{data.experience}</td>
              <td>{data.descreption}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Page;
