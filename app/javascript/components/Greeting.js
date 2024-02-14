// Greeting.js
import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGreetings } from "../redux/GreetingsSlice";

const Greeting = () => {
  const dispatch = useDispatch();
  const { greetingItem} = useSelector((store) => store.greetings);
  useEffect(() => {
    if (greetingItem === 'Loading...') {
      dispatch(getGreetings());
    }
  })
  return (
    <>
      <h2>{greetingItem}</h2>
    </>
  );
};

export default Greeting;
