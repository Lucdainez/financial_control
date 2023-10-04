import { paymentMethodEnum } from "@/Enums";

interface Financial {
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
}

export default Financial;