import axios from "axios";
import { useNavigate } from "react-router-dom";

export default class UserInfo {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.pre-onboarding-selection-task.shop/",
    });
  }

  navigate = useNavigate();

  async signup(email, password) {
    const userData = {
      email: email,
      password: password,
    };
    return this.httpClient
      .post("auth/signup", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        alert("회원가입에 성공하엿습니다.");
        this.navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  async signin(email, password) {
    const userData = {
      email: email,
      password: password,
    };
    return this.httpClient
      .post("auth/signin", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const { access_token } = res.data;
        localStorage.setItem("token", access_token);
        this.navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  }
}
