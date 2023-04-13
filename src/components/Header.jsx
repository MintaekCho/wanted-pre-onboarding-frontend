import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../pages/Root";

export default function Header(props) {

  return (
    <header className="flex items-center justify-center flex-col font-bold">
      <Link to={"/"}>
        <h1 className="text-4xl text-white">Todo List</h1>
      </Link>
      <div className="text-yellow-100">
        {localStorage.getItem('token') ? (
          <Link
            to={"/signin"}
            onClick={() => {
              localStorage.removeItem("token");
            }}
          >
            로그아웃
          </Link>
        ) : (
          <div>
            <Link
              to={{
                pathname: `/signin`,
              }}
            >
              로그인
            </Link>
            <Link className="ml-4" to={{ pathname: `/signup` }}>
              회원가입
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
