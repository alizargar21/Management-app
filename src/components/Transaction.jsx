import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Taghvim from "../utility/Jalali";
import { v4 as uuid } from "uuid";
import http from "../services/httpServices";
const initialTransaction = {
  id : "",
  title: "",
  amount: 0,
  description: "",
  type: "",
  createdAt: "",
  date: "",
};
const Transaction = () => {
  const [transaction, setTransaction] = useState(initialTransaction);
  const submitTransaction = async ( e) => {
    e.preventDefault()
    transaction.createdAt = new Date();
    transaction.id = uuid();
    if(transaction.type === "outgo") {
      await http.post("/transaction?outgo" , transaction)
    } else {
      await http.post("/transaction?income" , transaction)

    }
  };
  const changeHandler = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };
  const dateHandleChange = (v) => {
    const value = v.format();
    setTransaction({ ...transaction, date: value });
  };
  useEffect(() => {
    console.log(transaction);
  }, [transaction]);
  return (
    <div className="w-[400px] h-[500px] bg-blue-900 p-4 ">
      <form className="flex justify-center items-center w-[80%] h-auto flex-col mx-auto font-vazir" onSubmit={submitTransaction}>
        <h2> Add Transaction</h2>
        <div className="flex flex-col w-[90%] bg-blue-500 h-[290px] items-center ">
          <input
            className="px-2 rounded m-1"
            placeholder="Title"
            type="text"
            name="title"
            value={transaction.title}
            onChange={changeHandler}
          />
          <input
            className="px-2 rounded m-1"
            placeholder="Amount"
            type="number"
            name="amount"
            value={transaction.amount}
            onChange={changeHandler}
          />
          <select name="type" onChange={changeHandler} value={transaction.type}>
            <option value="income">دریافتی</option>
            <option value="outgo">پرداخنی</option>
          </select>
          <Taghvim
            value={transaction.date}
            dateHandleChange={dateHandleChange}
          />
          <textarea
            className="px-2 rounded m-1 "
            placeholder="Description"
            rows={3}
            name="description"
            value={transaction.description}
            onChange={changeHandler}
          />
        <button type="submit" className="p-2 rounded bg-green-500 text-white">ثبت تراکنش</button>
        </div>
      </form>
    </div>
  );
};

export default Transaction;
