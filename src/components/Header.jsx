import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const LoginContext = createContext();

export default function Header( props ) {
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  const handleValidLogin = (value) => {
    setIsLogin(value);
  };

  const handleSign = () => {
    if (localStorage.getItem("token")) navigate("/");
  };

  return (
    <header className="flex items-center justify-center flex-col font-bold">
      <Link to={"/"}>
        <h1 className="text-4xl text-white">Todo List</h1>
      </Link>
      <div className="text-yellow-100">
        {isLogin ? (
          <Link to={"/"} onClick={() => localStorage.removeItem("token")}>
            로그아웃
          </Link>
        ) : (
          <div>
            <Link
              to={{
                pathname: `/signin`,
                state: { handleValidLogin: handleValidLogin },
              }}
            >
              로그인
            </Link>
            <Link
              className="ml-4"
              to={{ pathname: `/signup`, state: { handleValidLogin } }}
            >
              회원가입
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
