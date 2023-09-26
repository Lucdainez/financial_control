import { EMAIL, PASSWORD } from "./environmentVariables";

const loginValidation = (email: string, password: string) => {
  try {
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const passwordTest: boolean = PASSWORD === password;
    const resultEmail: boolean = expression.test(email);
    const emailTest: boolean = EMAIL === email;

    if (!resultEmail || !passwordTest || !emailTest) {
      throw new Error("email ou senha errados");
    }

    return "login efetuado com sucesso!!";
  } catch (error) {
    // throw new Error("a validação do login deu errado!!");
    return "a validação do login deu errado!!";
  }
};

export default loginValidation;
