import React from "react";
import { useContext } from "react";
import { useState } from "react";
import UserInfo from "../api/userInfo";
import { LoginContext } from "./Header";

export default function InputForm({ type }) {
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(false);

  const userInfo = new UserInfo();
  const handleIsLoginChange = useContext(LoginContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(type === 'signup') {
      userInfo.signup(email, password)
    }

    if(type === 'signin') {
      userInfo.signin(email, password)
    }
    setEmail("");
    setPassword("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailCheck(validateEmail(email))
    console.log();
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setEmailCheck(validatePassword(password))
  }


  let buttonType = '';

  switch(type) {
    case 'signup' : buttonType = '"signup-button"'; break;
    case 'signin' : buttonType = '"signin-button"'; break;
    default : return
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid="email-input"
        type="text"
        placeholder="이메일을 입력해주세요"
        value={email}
        onChange={handleEmail}
      />
      <input
        data-testid="password-input"
        type="text"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={handlePassword}
      />
      <button data-testid={buttonType}>가입하기</button>
    </form>
  );
}

function validateEmail(email) {
  const emailPattern = /@/;
  return emailPattern.test(email);
}

function validatePassword(password) {
  return password.length >= 8
}