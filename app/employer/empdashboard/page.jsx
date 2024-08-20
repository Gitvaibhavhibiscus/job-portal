"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import "@/app/assets/main.scss";

const Fetchdata = () => {
  const [userData, setuserData] = useState([]);
  const [isError, setIsError] = useState("");

  // using Promises
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setuserData(response.data))
      .catch((error) => setIsError(error.message));
  }, []);

  //plz subscribe to thapa technical
  return (
    <>
      <h1>User Submission</h1> <br />
      {isError !== "" && <h2>{isError}</h2>}
      <div>
        {userData.map((data) => {
          return (
            <table>
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td className="bg-lime-400">User Details</td>
              </tr>
            </table>
          );
        })}
      </div>
    </>
  );
};

export default Fetchdata;
