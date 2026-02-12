"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AuthForm = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");

    if (!isLogin && authData.password !== authData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const endpoint = isLogin ? "/login" : "/register";
    const payload = {
      email: authData.email,
      password: authData.password,
    };

    try {
      const response = await fetch(`http://localhost:8080${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      if (isLogin) {
        console.log("Login Success:", data);
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        router.push("/dashboard");
      } else {
        console.log("Registration Success:", data);
        setSuccessMsg("Registration successful! You can now login.");

        setIsLogin(true);
        setAuthData((prev) => ({ ...prev, confirmPassword: "" }));
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-primary to-secondary p-4">
      <div className="w-full max-w-97.5 bg-white p-8 rounded-[15px] shadow-2xl overflow-hidden">
        {/* Naslovi */}
        <div
          className="flex w-[200%] transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]"
          style={{ marginLeft: isLogin ? "0%" : "-100%" }}>
          <div className="w-1/2 text-[35px] font-semibold text-center">
            Login Form
          </div>
          <div className="w-1/2 text-[35px] font-semibold text-center">
            Signup Form
          </div>
        </div>

        <div className="mt-8">
          {/* Poruke o grešci ili uspehu */}
          {error && (
            <p className="text-red-500 text-sm text-center mb-2">{error}</p>
          )}
          {successMsg && (
            <p className="text-green-500 text-sm text-center mb-2">
              {successMsg}
            </p>
          )}

          {/* Tabovi */}
          <div className="relative flex h-12.5 w-full border border-gray-300 rounded-[15px] overflow-hidden justify-between">
            <div
              className={`absolute h-full w-1/2 bg-linear-to-r from-primary to-secondary rounded-[15px] transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
                isLogin ? "left-0" : "left-1/2"
              }`}></div>

            <label
              onClick={() => setIsLogin(true)}
              className={`z-10 w-full text-center leading-12 text-[18px] font-medium cursor-pointer transition-colors duration-300 ${isLogin ? "text-white" : "text-black"}`}>
              Login
            </label>
            <label
              onClick={() => setIsLogin(false)}
              className={`z-10 w-full text-center leading-12 text-[18px] font-medium cursor-pointer transition-colors duration-300 ${!isLogin ? "text-white" : "text-black"}`}>
              Signup
            </label>
          </div>

          <div className="w-full overflow-hidden mt-4">
            <div
              className="flex w-[200%] transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]"
              style={{ marginLeft: isLogin ? "0%" : "-100%" }}>
              {/* Login Form */}
              <form
                onSubmit={handleSubmit}
                className="w-1/2 flex flex-col gap-5">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={authData.email} // Povezano sa state-om
                  className="h-12.5 w-full px-4 border border-gray-300 border-b-2 rounded-[15px] outline-none focus:border-[#1a75ff] transition-all"
                  onChange={(e) =>
                    setAuthData({ ...authData, email: e.target.value })
                  }
                />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={authData.password} // Povezano sa state-om
                  className="h-12.5 w-full px-4 border border-gray-300 border-b-2 rounded-[15px] outline-none focus:border-[#1a75ff] transition-all"
                  onChange={(e) =>
                    setAuthData({ ...authData, password: e.target.value })
                  }
                />
                <div className="relative h-12.5 w-full rounded-[15px] overflow-hidden group">
                  <div className="absolute inset-0 w-[300%] -left-full bg-linear-to-r from-primary to-secondary transition-all duration-400 group-hover:left-0"></div>
                  <input
                    type="submit"
                    value="Login"
                    className="relative z-10 w-full h-full bg-transparent border-none text-white text-[20px] font-medium cursor-pointer"
                  />
                </div>
                <div className="text-center mt-2">
                  Not a member?{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLogin(false);
                    }}
                    className="text-[#1a75ff] no-underline hover:underline">
                    Signup now
                  </a>
                </div>
              </form>

              {/* Signup Form */}
              <form
                onSubmit={handleSubmit}
                className="w-1/2 flex flex-col gap-5">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={authData.email}
                  className="h-12.5 w-full px-4 border border-gray-300 border-b-2 rounded-[15px] outline-none focus:border-[#1a75ff] transition-all"
                  onChange={(e) =>
                    setAuthData({ ...authData, email: e.target.value })
                  }
                />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={authData.password}
                  className="h-12.5 w-full px-4 border border-gray-300 border-b-2 rounded-[15px] outline-none focus:border-[#1a75ff] transition-all"
                  onChange={(e) =>
                    setAuthData({ ...authData, password: e.target.value })
                  }
                />
                <input
                  type="password"
                  placeholder="Confirm password"
                  required
                  value={authData.confirmPassword}
                  className="h-12.5 w-full px-4 border border-gray-300 border-b-2 rounded-[15px] outline-none focus:border-[#1a75ff] transition-all"
                  onChange={(e) =>
                    setAuthData({
                      ...authData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                <div className="relative h-12.5 w-full rounded-[15px] overflow-hidden group">
                  <div className="absolute inset-0 w-[300%] -left-full bg-linear-to-r from-primary to-secondary transition-all duration-400 group-hover:left-0"></div>
                  <input
                    type="submit"
                    value="Signup"
                    className="relative z-10 w-full h-full bg-transparent border-none text-white text-[20px] font-medium cursor-pointer"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
