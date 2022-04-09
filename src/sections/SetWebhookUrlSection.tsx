import React, { ChangeEvent, useEffect, useState } from "react";

import Section from "../components/Section";

export default () => {
  let [inputValue, setInputValue] = useState(
    localStorage.getItem("webhook-url") ?? ""
  );
  let [error, setError] = useState<string | boolean>(false);

  useEffect(() => {
    if (!/https:\/\/discord.com\/api\/webhook(\/?)/g.test(inputValue)) {
      setError(
        "Malformed url ! Expecting discord webhook url ( eg: https://discord.com/api/webhook/<webhook id>/<webhook token> )"
      );
      return;
    } else setError(false);

    localStorage.setItem("webhook-url", inputValue);
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
      {inputValue && error === false ? (
        <p>
          Webhook URL set as: <code>{inputValue}</code>
        </p>
      ) : null}
      {error ? (
        <p style={{ color: "var(--error)" }}>
          {error !== true ? error : "Unknown Error !"}
        </p>
      ) : null}
    </Section>
  );
};
