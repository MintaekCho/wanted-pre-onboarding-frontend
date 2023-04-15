import { Link, useLocation } from "react-router-dom";
import { useLoginFetch } from "../hooks/useLoginFetch";

export default function Header() {

  const {isLogin, setIsLogin} = useLoginFetch(useLocation().pathname);

  return (
    <header className="flex items-center justify-center flex-col font-bold">
      <Link to={isLogin ? '/todo' : '/'}>
        <h1 className="text-4xl text-white">Todo List</h1>
      </Link>
      <div className="text-yellow-100">
        {isLogin ? (
          <Link
            to={"/signin"}
            onClick={() => {
              localStorage.removeItem("token");
              setIsLogin(false);
            }}
          >
            로그아웃
          </Link>
        ) : (
          <div>
            <Link
              to={{
                pathname: `/signin`,
                state: { setIsLogin: setIsLogin },
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
