"use client";
import Salary from "@/components/Salary";
import MonthlyExpenses from "@/components/MonthlyExpenses";
import CashPurchases from "@/components/CashPurchases";
import FixedAccounts from "@/components/FixedAccounts";
import Header from "@/components/Header";
import { useEffect } from "react";
import { NAME_LOCAL_STORAGE_SECURITY } from "../../../../security/environmentVariables";
import { useRouter } from "next/navigation";

export default function FinancialControl() {
  const router = useRouter();
  useEffect(() => {
    localStorage.getItem(NAME_LOCAL_STORAGE_SECURITY);
    if (!localStorage.getItem(NAME_LOCAL_STORAGE_SECURITY)) {
      router.push("/");
    }
  }, []);
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
