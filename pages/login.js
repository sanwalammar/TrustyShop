import React, { useState } from "react";
import jwt from "jsonwebtoken";
import Router from "next/router";
import Swal from "sweetalert2";
import Link from "next/link"
import { useEffect } from "react";
import { isAuthenticated } from './utils/auth'
import styles from '../styles/Mp.module.css'



function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated()) {
      Router.push('/Home')
    }
  }, [])

  const loginUser = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required.",
      });
      return false;
    }

    const data = {
      email,
      password,
    };

    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "manual",
      body: JSON.stringify(data),
    });
    const result = await res.json();

    const token = result.token;
    if (token) {
      const json = jwt.decode(token);
      localStorage.setItem("name", json.name);
      localStorage.setItem("email", json.email);
      localStorage.setItem("token", token);
      localStorage.setItem("userId", json.userId);
      Router.push('/profile')
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email or Password not Match",
      });
    }

  };

  return (
    <div>
      {/* <div className="relative flex flex-col justify-center min-h-screen overflow-hidden"> */}
      <div className={styles.pageBg}>
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase ">
            Sign in
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
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
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <a href="#" className="text-xs text-purple-600 hover:underline">

            </a>
            <div className="mt-6">
              <button
                onClick={loginUser}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700" >
            {" "}
            Don't have an account?{" "}
            <Link href="/Register">
              <a className="font-medium text-purple-600 hover:underline">
                Register
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}



export default login;
