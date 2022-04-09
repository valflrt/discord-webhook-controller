import React, { ChangeEvent, useEffect, useState } from "react";

import Section from "../components/Section";

export default () => {
  let [inputValue, setInputValue] = useState(
    localStorage.getItem("webhook-url") ?? ""
  );
  let [info, setInfo] = useState<{
    message: string | JSX.Element;
    type?: "error" | "success" | null | undefined;
  }>({ message: "" });

  useEffect(() => {
    if (inputValue === "") {
      localStorage.removeItem("webhook-url");
      setInfo({
        message: "",
        type: null,
      });
    } else if (!/https:\/\/discord.com\/api\/webhook(\/?)/g.test(inputValue)) {
      localStorage.removeItem("webhook-url");
      setInfo({
        message: (
          <>
            Malformed url ! Expecting discord webhook url (eg:{" "}
            <code>
              https://discord.com/api/webhook/[webhook id]/[webhook token]
            </code>
            )
          </>
        ),
        type: "error",
      });
    } else {
      localStorage.setItem("webhook-url", inputValue);
      setInfo({
        message: (
          <>
            Webhook URL set as: <code>{inputValue}</code>
          </>
        ),
        type: "success",
      });
    }
  }, [inputValue]);

  return (
    <Section>
      <h2>Set webhook url</h2>
      <p>Webhook URL:</p>
      <input
        value={inputValue}
        type="text"
        onInput={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
      />
      {info.type !== null ? <p className={info.type}>{info.message}</p> : null}
    </Section>
  );
};
