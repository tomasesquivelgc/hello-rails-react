// Greeting.js
import React from "react";
import { connect } from "react-redux";

const Greeting = ({ message, setMessage }) => {
  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/messages/random");
    const data = await res.json();
    setMessage(data.content);
  };

  return (
    <>
      <h2>{message}</h2>
      <button onClick={fetchData}>New Greeting</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  message: state.message
});

const mapDispatchToProps = (dispatch) => ({
  setMessage: (message) => dispatch({ type: 'SET_MESSAGE', payload: message })
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
