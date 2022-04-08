import React, { ChangeEvent, useEffect, useState } from "react";

import Section from "../components/Section";

export default () => {
  let [inputValue, setInputValue] = useState("");
  let [messageText, setMessageText] = useState<null | string>();
  let [readyToSendMessage, setReadyToSendMessage] = useState(false);
  let [info, setInfo] = useState<{
    message: string | JSX.Element;
    error?: boolean;
  }>({ message: "" });

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
        setInfo(
          res.ok
            ? {
                message: "Message Sent Successfully",
                error: false,
              }
            : {
                message: (
                  <>
                    Failed to send message:{" "}
                    <code>
                      {res.status}
                      {res.statusText ? ` - ${res.statusText}` : ""}
                    </code>
                  </>
                ),
                error: true,
              }
        );
      })
      .catch((err) => {
        setInfo({
          message: (
            <>
              Failed to send message: <code>{`${err}`}</code>
            </>
          ),
          error: true,
        });
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
        onKeyUp={(e) => (e.key === "Enter" ? fetchApiToSendMessage() : null)}
      />
      <button onClick={fetchApiToSendMessage} disabled={!readyToSendMessage}>
        Send
      </button>
      {info ? (
        <p style={info.error ? { color: "var(--error)" } : {}}>
          {info.message}
        </p>
      ) : null}
    </Section>
  );
};
