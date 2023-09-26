"use client";
import loginValidation from "../../security/loginValidation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  NAME_LOCAL_STORAGE_SECURITY,
  LOCAL_STORAGE_PASSWORD,
  LOGIN_MESSAGE_VALIDATION,
} from "../../security/environmentVariables";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    localStorage.clear();
    const login = loginValidation(email, password);
    if (login === LOGIN_MESSAGE_VALIDATION) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [email, setEmail, password, setPassword]);

  const emailInputChange = (event: any) => {
    const { value } = event.target;
    setEmail(value);
  };

  const passwordInputChange = (event: any) => {
    const { value } = event.target;
    setPassword(value);
  };

  const buttonClick = () => {
    localStorage.setItem(NAME_LOCAL_STORAGE_SECURITY, LOCAL_STORAGE_PASSWORD);
    router.push("/financial/control");
  };
  return (
    <section>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={emailInputChange}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Senha"
        onChange={passwordInputChange}
      />
      <button disabled={isLogin} type="submit" onClick={buttonClick}>
        Entrar
      </button>
    </section>
  );
}
