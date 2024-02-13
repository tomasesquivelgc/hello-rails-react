import React from "react";
import {useEffect, useState} from "react";

export default function Greeting() {
  const [message, setMessage] = useState("");
  const [flag, setFlag] =useState(false);
  useEffect(() => {
    async function getData()  {
      const res = await fetch("http://localhost:3000/messages/random");
      const data = await res.json();
      setMessage(data.content)
    }
    getData()
  }, [flag]);
  return <>
    <h2>{message}</h2>
    <button onClick={() => setFlag(!flag)}>New Greeting
    </button>
  </>
}