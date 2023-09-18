"use client";
import Salary from "@/components/Salary";
import MonthlyExpenses from "@/components/MonthlyExpenses";
import CashPurchases from "@/components/CashPurchases";
import FixedAccounts from "@/components/FixedAccounts";
import Header from "@/components/Header";

export default function FinancialControl() {
  return (
    <section>
      <Header />
      <Salary />
      <MonthlyExpenses />
      <CashPurchases />
      <FixedAccounts />
    </section>
  );
}
