import { ellipsis, fmt, setInfoFactory } from "./util";

let webhookUrlInput = document.querySelector<HTMLInputElement>(
  "#setWebhookUrl .webhookUrlInput"
)!;
let infoElement = document.querySelector<HTMLParagraphElement>(
  "#setWebhookUrl .info"
)!;

let setInfo = setInfoFactory(infoElement);

let webhookUrlFromParams = new URLSearchParams(location.search).get("url");

if (
  !!localStorage.getItem("webhook-url") &&
  /https:\/\/discord.com\/api\/webhooks(\/?)/g.test(
    localStorage.getItem("webhook-url")!
  )
) {
  webhookUrlInput.value = localStorage.getItem("webhook-url")!;
  setInfo(
    fmt`Webhook URL set as: ${[ellipsis(webhookUrlInput.value), "code"]}`,
    "success"
  );
} else if (
  webhookUrlFromParams &&
  /https:\/\/discord.com\/api\/webhooks(\/?)/g.test(webhookUrlFromParams)
) {
  webhookUrlInput.value = webhookUrlFromParams;
  setInfo(
    fmt`Webhook URL set as: ${[ellipsis(webhookUrlInput.value), "code"]}`,
    "success"
  );
}

webhookUrlInput.addEventListener("input", () => {
  if (webhookUrlInput.value === "") {
    localStorage.removeItem("webhook-url");
    setInfo();
  } else if (
    !/https:\/\/discord.com\/api\/webhooks(\/?)/g.test(webhookUrlInput.value)
  ) {
    localStorage.removeItem("webhook-url");
    setInfo(
      fmt`Malformed url ! Expecting discord webhook url (${[
        "https://discord.com/api/webhooks/[webhook id]/[webhook token]",
        "code",
      ]})`,
      "error"
    );
  } else {
    localStorage.setItem("webhook-url", webhookUrlInput.value);
    setInfo(
      fmt`Webhook URL set as: ${[ellipsis(webhookUrlInput.value), "code"]}`,
      "success"
    );
  }
});

export {};
