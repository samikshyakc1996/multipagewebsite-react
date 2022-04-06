import React, { useState, useEffect } from "react";
import "../css/styles.css";
export default function Contact() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message) {
      alert("Your message has been submitted!");
      const newMessage = document.getElementById("msg");
      newMessage.value = "";
    }
  });

  function handleBtn(e) {
    var newMessage = document.getElementById("msg");
    newMessage = newMessage.value;
    if (newMessage) {
      setCount(count + 1);
      setMessage(`Your last message was:${newMessage}`);
    }
  }

  return (
    <>
      <div className="form-like">
        <h3> Want to Contact Samikshya K C?</h3>
        <input
          type="text"
          placeholder="Type your message"
          name="msg"
          id="msg"
          required
        />
        <button onClick={handleBtn}>Submit Message</button>
        <div>
          <span className="count-msg">
            Times you have contacted Samikshya: {count}
          </span>
          <br />
          <span className="last-msg"> {message}</span>
        </div>
      </div>
    </>
  );
}
