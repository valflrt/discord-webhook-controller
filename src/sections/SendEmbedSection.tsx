import React, { ChangeEvent, useEffect, useState } from "react";

import { MessageEmbedDeclaration } from "./types";

import Section from "../components/Section";

export default () => {
  let [descriptionValue, setDescriptionValue] = useState<string>("");
  let [titleValue, setTitleValue] = useState<string>("");
  let [titleUrlValue, setTitleUrlValue] = useState<string>("");
  let [footerValue, setFooterValue] = useState<string>("");
  let [authorValue, setAuthorValue] = useState<string>("");
  let [thumbnailUrlValue, setThumbnailUrlValue] = useState<string>("");

  let [messageEmbed, setMessageEmbed] =
    useState<null | MessageEmbedDeclaration>();
  let [readyToSendMessage, setReadyToSendMessage] = useState(false);
  let [errorMessage, setErrorMessage] = useState<null | string | JSX.Element>();

  useEffect(() => {}, [
    descriptionValue,
    titleValue,
    titleUrlValue,
    footerValue,
    authorValue,
    thumbnailUrlValue,
  ]);

  let fetchApiToSendMessage = () =>
    fetch(localStorage.getItem("webhook-url") ?? "", {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tts: false,
        embeds: [messageEmbed],
      }),
    })
      .then((res) => {
        setErrorMessage(
          res.ok ? (
            "Message sent successfully"
          ) : (
            <>
              Failed to send embed:{" "}
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

      <p>Embed description (main text):</p>
      <input
        value={descriptionValue}
        type="text"
        onInput={(e: ChangeEvent<HTMLInputElement>) =>
          setDescriptionValue(e.target.value)
        }
      />

      <p>Embed title:</p>
      <input
        value={titleValue}
        type="text"
        onInput={(e: ChangeEvent<HTMLInputElement>) =>
          setTitleValue(e.target.value)
        }
      />

      <p>Embed title url:</p>
      <input
        value={titleUrlValue}
        type="text"
        onInput={(e: ChangeEvent<HTMLInputElement>) =>
          setTitleUrlValue(e.target.value)
        }
      />

      <p>Embed footer:</p>
      <input
        value={footerValue}
        type="text"
        onInput={(e: ChangeEvent<HTMLInputElement>) =>
          setFooterValue(e.target.value)
        }
      />

      <p>Embed author:</p>
      <input
        value={authorValue}
        type="text"
        onInput={(e: ChangeEvent<HTMLInputElement>) =>
          setAuthorValue(e.target.value)
        }
      />

      <p>Embed thumbnail url:</p>
      <input
        value={thumbnailUrlValue}
        type="text"
        onInput={(e: ChangeEvent<HTMLInputElement>) =>
          setThumbnailUrlValue(e.target.value)
        }
      />

      <button
        onClick={fetchApiToSendMessage}
        disabled={!readyToSendMessage}
        style={{ display: "block" }}
      >
        Send
      </button>

      {errorMessage ? (
        <p style={{ color: "var(--error)" }}>{errorMessage}</p>
      ) : null}
    </Section>
  );
};
