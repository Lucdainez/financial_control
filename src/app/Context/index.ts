import { createContext } from "react";
import { paymentMethodEnum } from "@/Enums";

export interface ContextFinancialProps {
  editFinancial: {
    totalSalary: number,
    totalExpenses: number,
    totalPurchases: number,
    workedDays: number,
    halfDayWorked: number,
    productPurchased: string,
    amountPaid: number,
    paymentMethod: paymentMethodEnum,
    accountName: string,
    accountValue: number,
    paidStatusOrNot: boolean,
    dueDate: Date,
  };
  setEditFinancial: React.Dispatch<React.SetStateAction<{
    totalSalary: number,
    totalExpenses: number,
    totalPurchases: number,
    workedDays: number,
    halfDayWorked: number,
    productPurchased: string,
    amountPaid: number,
    paymentMethod: paymentMethodEnum,
    accountName: string,
    accountValue: number,
    paidStatusOrNot: boolean,
    dueDate: Date,
  }>>
}

export const FinancialContext = createContext<ContextFinancialProps>({} as ContextFinancialProps);
