import React, { ChangeEvent, useEffect, useState } from "react";

import Section from "../components/Section";

export default () => {
  let [inputValue, setInputValue] = useState("");
  let [messageText, setMessageText] = useState<null | string>();
  let [readyToSendMessage, setReadyToSendMessage] = useState(false);
  let [errorMessage, setErrorMessage] = useState<null | string | JSX.Element>();

  useEffect(() => {
    if (inputValue == "") {
      setMessageText(null);
      return;
    } else setMessageText(inputValue);
    if (messageText && localStorage.getItem("webhook-url"))
      setReadyToSendMessage(true);
    else setReadyToSendMessage(false);
  }, [inputValue]);

  let fetchApiToSendMessage = () =>
    fetch(localStorage.getItem("webhook-url") ?? "", {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tts: false,
        content: messageText,
      }),
    })
      .then((res) => {
        setErrorMessage(
          res.ok ? (
            "Message sent successfully"
          ) : (
            <>
              Failed to send message:{" "}
              <code>
                {res.status}
                {res.statusText ? ` - ${res.statusText}` : ""}
              </code>
            </>
          )
        );
      })
      .catch((err) => {
        setErrorMessage(
          <>
            Failed to send message: <code>{err}</code>
          </>
        );
      });

  return (
    <Section>
      <h2>Send message (text)</h2>
      <p>Message text:</p>
      <input
        value={inputValue}
        type="text"
        onInput={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
      />
      <button onClick={fetchApiToSendMessage} disabled={!readyToSendMessage}>
        Send
      </button>
      {errorMessage ? (
        <p style={{ color: "var(--error)" }}>{errorMessage}</p>
      ) : null}
    </Section>
  );
};
