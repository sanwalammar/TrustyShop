import React, { useState, useEffect } from "react";
import Router from "next/router";
import Swal from "sweetalert2";
import Link from "next/link";
import { isAuthenticated } from './utils/auth'
import styles from '../styles/Mp.module.css'

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenter, setReenter] = useState("");

  useEffect(() => {
    if (isAuthenticated()) {
      Router.push('/Home')
    }
  }, [])

  const registerUser = async (e) => {
    e.preventDefault();

    if (email === "" || password === "" || name === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required.",
      });
      return false;
    }
    if (password !== reenter) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password does not match!",
      });
      return false;
    }
    const data = {
      name,
      email,
      password,
    };

    const res = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      redirect: "manual",
      body: JSON.stringify(data),
    });
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Successfully Registered!",
        text: "You are Successfully registered now.",
      });
    }

    Router.push("/login");
  };

  return (
    <div>

      {/* <div className="relative flex flex-col justify-center min-h-screen overflow-hidden"> */}
      <div className={styles.pageBg}>
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase ">
            Register
          </h1>
          <form className="mt-6">

            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                required
                type="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                required
                type="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                required
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label
                for="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Confirm Password
              </label>
              <input
                required
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={reenter}
                onChange={(e) => setReenter(e.target.value)}
              />
            </div>

            <div className="mt-6">
              <input
                type="submit"
                value="SignUp"
                onClick={registerUser}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              />
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Already Registered?{" "}
            <Link href="/login">
              <a className="font-medium text-purple-600 hover:underline">
                SignIn
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
