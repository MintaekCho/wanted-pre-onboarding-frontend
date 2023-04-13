import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import TodoApiContext from "../context/TodoApiContext";

export default function Root() {

  return (
      <TodoApiContext>
        <Header />
        <Outlet />
      </TodoApiContext>
  );
}
