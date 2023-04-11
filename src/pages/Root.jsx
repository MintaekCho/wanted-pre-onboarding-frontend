import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import TodoApiContext from "../context/TodoApiContext";
import { TokenContext } from "../context/TokenContext";

export default function Root() {
  return (
      <TodoApiContext>
        <Header />
        <Outlet />
      </TodoApiContext>
  );
}
