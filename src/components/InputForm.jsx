import React, { useEffect } from "react";
import { useState } from "react";
import UserInfo from "../api/userInfo";

export default function InputForm({ type }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const userInfo = new UserInfo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "signup") {
      userInfo.signup(email, password);
    }

    if (type === "signin") {
      userInfo.signin(email, password);
    }
    setEmail("");
    setPassword("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (validateEmail(email) && validatePassword(password)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email, password]);

  let buttonType = "";

  switch (type) {
    case "signup":
      buttonType = '"signup-button"';
      break;
    case "signin":
      buttonType = '"signin-button"';
      break;
    default:
      return;
  }

  return (
    <form
      className="flex flex-col items-center justify-center w-3/5 min-w-[550px] max-w-[750px] h-2/5 min-h-[300px] max-h-[500px] mt-4 bg-slate-800 rounded-3xl"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl text-white font-bold mb-4">
        {type === "signup" ? "회원가입" : "로그인"}
      </h2>

      <div className="w-1/2 h-8 flex items-center gap-2">
        <label
          className="w-[15%] text-white font-bold text-right"
          htmlFor="email"
        >
          email
        </label>
        <input
          id="email"
          className="w-[85%] h-full p-2 rounded-xl outline-none ml-2"
          data-testid="email-input"
          type="text"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={handleEmail}
        />
      </div>
      <div className="w-1/2 h-8 flex items-center mt-2 gap-2">
        <label className="w-[15%] text-white font-bold text-right" htmlFor="pw">
          pw
        </label>
        <input
          id="pw"
          className="w-[85%] h-full p-2 rounded-xl outline-none ml-2"
          data-testid="password-input"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={handlePassword}
        />
      </div>

      <button
        className="w-1/5 bg-orange-700 text-white font-bold p-2 rounded-2xl mt-4 disabled:bg-gray-600 disabled:text-gray-500"
        data-testid={buttonType}
        disabled={!isValid}
      >
        {type === "signup" ? "회원가입" : "로그인"}
      </button>
    </form>
  );
}

function validateEmail(email) {
  const emailPattern = /@/;
  return emailPattern.test(email);
}

function validatePassword(password) {
  return password.length >= 8;
}
