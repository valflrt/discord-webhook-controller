import React, { ChangeEvent, useEffect, useState } from "react";

import Section from "../components/Section";

export default () => {
  let [inputValue, setInputValue] = useState("");
  let [readyToSendMessage, setReadyToSendMessage] = useState(false);
  let [info, setInfo] = useState<{
    message: string | JSX.Element;
    type?: "error" | "success" | null | undefined;
  }>({ message: "" });

  useEffect(() => {
    if (inputValue !== "" && localStorage.getItem("webhook-url"))
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
        content: inputValue,
      }),
    })
      .then((res) => {
        if (res.ok) setInputValue("");
        setInfo(
          res.ok
            ? {
                message: "Message Sent Successfully",
                type: "success",
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
                type: "error",
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
          type: "error",
        });
      });

  return (
    <Section>
      <h2>Send message (text)</h2>
      <p>Message text:</p>
      <div className="align row">
        <textarea
          value={inputValue}
          rows={4}
          onInput={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setInputValue(e.target.value)
          }
          onKeyPress={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              if (readyToSendMessage) fetchApiToSendMessage();
            }
          }}
        />
        <button onClick={fetchApiToSendMessage} disabled={!readyToSendMessage}>
          Send
        </button>
      </div>

      <p className="grey">
        You can skip a line without sending the message by pressing{" "}
        <code>Shift + Enter</code>
      </p>

      {info.type !== null ? <p className={info.type}>{info.message}</p> : null}
    </Section>
  );
};
