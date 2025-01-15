import React, { useState, useEffect } from "react";

import Swal from "sweetalert2";
import Router from "next/router";
import styles from '../styles/Mp.module.css'


function profile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [isHomeDisabled, setIsHomeDisabled] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    fetch(`http://localhost:3000/api/profile/${userId}`)
      .then((result) => {
        result.json()
        .then((resp) => {
          const result = resp[0];
          if (result.name && result.age && result.gender && result.default_address && result.mobile_num) {
            setIsHomeDisabled(false)
          }
          setName(result.name);
          setAge(result.age);
          setGender(result.gender);
          setAddress(result.default_address);
          setPassword(result.password);
          setMobile(result.mobile_num);
        });
      });
  }, []);

  const updateprofile = async (e) => {
    e.preventDefault();
    if (
      name === "" ||
      age === "" ||
      gender === "" ||
      address === "" ||
      password === "" ||
      mobile === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required.",
      });
      return false;
    }

    const userId = localStorage.getItem("userId");
    const data = {
      name,
      password,
      age: parseInt(age),
      address,
      gender,
      mobile,
    };

    const res = await fetch(`http://localhost:3000/api/profile/${userId}`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "manual",
      body: JSON.stringify(data),
    });
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Successfully Updated!",
        text: "Record Successfully Updated.",
      }).then(() => {
        Router.push('Home');
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
  return (
    <div>
      {/* <div className="relative flex flex-col justify-center min-h-screen overflow-hidden"> */}
      <div className={styles.pageBg}>
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
          <div>
            <h1 className="text-3xl font-semibold text-center text-purple-700 ">
              My Profile
            </h1>
            <br></br>
          </div>
          <div className="Name">
            <label className="block text-sm font-semibold text-gray-800">
              Name
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="age">
            <label className="block text-sm font-semibold text-gray-800">
              Age
            </label>
            <input
              type="number"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="Address">
            <label className="block w-full text-sm font-semibold text-gray-800">
              Address
            </label>
            <input
              type="text box"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="Gender">
            {" "}
            <label className="block text-sm font-semibold text-gray-800">
              Gender
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div className="Mobile">
            {" "}
            <label className="block text-sm font-semibold text-gray-800">
              Mobile Number
            </label>
            <input
              type="number"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="password">
            {" "}
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <br />

            <button
              onClick={updateprofile}
              className="px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Update
            </button>
            <button
              disabled={isHomeDisabled}
              onClick={() => Router.push('Home')}
              className="px-4 py-2 mx-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default profile;
