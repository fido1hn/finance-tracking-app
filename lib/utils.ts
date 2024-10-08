import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function transformTransaction(
  transaction: DBTransaction,
): UITransaction {
  const createdAt = new Date(transaction.created_at);
  return {
    id: transaction.id,
    amount: transaction.amount,
    payment_method: transaction.payment_type,
    date: format(createdAt, "yyyy-MM-dd"),
    time: format(createdAt, "HH:mm:ss"),
  };
}

type DBTransaction = {
  created_at: string;
  amount: number;
  payment_type: string;
  id: number;
};

export type UITransaction = {
  date: string;
  time: string;
  payment_method: string;
  amount: number;
  id: number;
};

export type TimePeriod = {
  from: string;
  to: string;
};
