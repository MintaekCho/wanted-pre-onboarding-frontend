import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const LoginContext = createContext();

export default function Header() {
  const [isLogin, setIsLogin] = useState(false)

  const handleIsLoginChange = (value) => {
    setIsLogin(value);
  }

  return (
    <header>
      <Link to={"/"}>
        <h1 className="text-2xl">Todo List</h1>
      </Link>
      <div>
        {isLogin ? (
          <Link to={"/"} onClick={() => localStorage.removeItem("token")}>
            로그아웃
          </Link>
        ) : (
          <LoginContext.Provider value={handleIsLoginChange}>
            <Link to={"/signin"}>로그인</Link>
            <Link to={"/signup"}>회원가입</Link>
          </LoginContext.Provider>
        )}
      </div>
    </header>
  );
}
