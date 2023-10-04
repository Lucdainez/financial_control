"use client";
import { useEffect, useState } from "react";
import { FaDollarSign } from "react-icons/fa";

export default function Salary() {
  const [salaryDay, setSalaryDay] = useState<number>(0);
  const [salaryHalfDay, setSalaryHalfDay] = useState<number>(0);
  const [totalSalary, setTotalSalary] = useState<number>(0);

  useEffect(() => {
    setTotalSalary(salaryDay + salaryHalfDay);
  }, [salaryDay, setSalaryDay, salaryHalfDay, setSalaryHalfDay]);

  const addWorkedDays = () => {
    setSalaryDay((prevState) => {
      return prevState + 60;
    });
  };

  const removeWorkedDays = (event: { preventDefault: () => void }) => {
    setSalaryDay((prevState) => {
      return prevState - 60;
    });
    if (salaryDay === 0) {
      setSalaryDay(0);
      event.preventDefault();
    }
  };

  const addHalfWorkedDays = () => {
    setSalaryHalfDay((prevState) => {
      return prevState + 30;
    });
  };

  const removeHalfWorkedDays = (event: { preventDefault: () => void }) => {
    setSalaryHalfDay((prevState) => {
      return prevState - 30;
    });
    if (salaryHalfDay === 0) {
      setSalaryHalfDay(0);
      event.preventDefault();
    }
  };

  const salaryReceived = () => {
    setSalaryHalfDay(0);
    setSalaryDay(0);
  };

  return (
    <section className="bg-gray w-5/6 m-auto p-4 rounded-lg">
      <div className="text-yellow">
        <FaDollarSign />
      </div>

      <h1>
        <strong>Salário</strong>
      </h1>

      <div className="flex itens-center justify-between">
        <div className="flex-initial">
          <p className="text-midGray">Salário total</p>
          <p>R$ {totalSalary},00</p>

          <p className="text-midGray">dias acumulados</p>
          <p>R$ {salaryDay},00</p>

          <p className="text-midGray">dias metade</p>
          <p>R$ {salaryHalfDay},00</p>
        </div>

        <div className="flex flex-col content-end justify-end">
        <button
            type="button"
            className=" text-white py-1 px-2 rounded-full"
            onClick={salaryReceived}
          >
            salário recebido
          </button>
          <div>
            <button
              type="button"
              className=" text-yellow font-bold py-1 px-2 rounded-full"
              onClick={addWorkedDays}
            >
              {" "}
              +{" "}
            </button>
            <button
              type="button"
              className=" text-yellow font-bold py-1 px-2 rounded-full"
              onClick={removeWorkedDays}
            >
              {" "}
              -{" "}
            </button>
          </div>
          <div>
            <button
              type="button"
              className=" text-yellow font-bold py-1 px-2 rounded-full"
              onClick={addHalfWorkedDays}
            >
              {" "}
              +{" "}
            </button>
            <button
              type="button"
              className=" text-yellow font-bold py-1 px-2 rounded-full"
              onClick={removeHalfWorkedDays}
            >
              {" "}
              -{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
