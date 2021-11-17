import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Aluguel",
    amount: 600.0,
    date: new Date(2020, 1, 14),
  },
  {
    id: "e2",
    title: "Manutenção Carro",
    amount: 200,
    date: new Date(2020, 2, 12),
  },
  {
    id: "e3",
    title: "Seguros",
    amount: 300.58,
    date: new Date(2020, 3, 16),
  },
  {
    id: "e4",
    title: "Plano de saúde",
    amount: 324.16,
    date: new Date(2020, 4, 1),
  },
  {
    id: "e5",
    title: "Aluguel",
    amount: 750.0,
    date: new Date(2021, 1, 14),
  },
  {
    id: "e6",
    title: "Manutenção Carro",
    amount: 350.48,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e7",
    title: "Seguros",
    amount: 420.95,
    date: new Date(2021, 3, 16),
  },
  {
    id: "e8",
    title: "Plano de saúde",
    amount: 210.0,
    date: new Date(2021, 4, 1),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
};

export default App;
