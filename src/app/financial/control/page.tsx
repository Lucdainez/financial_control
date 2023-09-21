"use client";
import Salary from "@/components/Salary";
import MonthlyExpenses from "@/components/MonthlyExpenses";
import CashPurchases from "@/components/CashPurchases";
import FixedAccounts from "@/components/FixedAccounts";

export default function FinancialControl() {
  return (
    <section>
      <Salary />
      <MonthlyExpenses />
      <CashPurchases />
      <FixedAccounts />
    </section>
  );
}
