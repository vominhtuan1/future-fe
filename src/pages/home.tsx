import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  decrement,
  increment,
  selectCounter,
} from "../redux/reducers/counter-slice";

export default function Home() {
  const counter = useAppSelector(selectCounter).value;
  const dispatch = useAppDispatch();

  return (
    <div>
      <h3>This is home page</h3>
      <button
        className="p-2 rounded-lg bg-slate-300"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{counter}</span>
      <button
        className="p-2 rounded-lg bg-slate-300"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}
