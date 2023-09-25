"use client";
import React, { useState, ReactNode, useEffect } from "react";
import { FinancialContext } from "./index";
import { paymentMethodEnum } from "@/Enums";

interface IProps {
  children: ReactNode;
}

const FinancialContextProvider = ({ children }: IProps) => {
  const [editFinancial, setEditFinancial] = useState({
    totalSalary: 0,
    totalExpenses: 0.00,
    totalPurchases: 0.00,
    workedDays: 0,
    halfDayWorked: 0,
    productPurchased: "",
    amountPaid: 0,
    paymentMethod: paymentMethodEnum.nulo,
    accountName: "",
    accountValue: 0,
    paidStatusOrNot: false,
    dueDate: new Date,
  });

  useEffect(() => {
  }, [setEditFinancial, editFinancial]);

  return (
    <FinancialContext.Provider value={{ editFinancial, setEditFinancial }}>
      {children}
    </FinancialContext.Provider>
  );
};

export default FinancialContextProvider;
