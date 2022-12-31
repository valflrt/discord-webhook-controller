import { fmt, setInfoFactory } from "./util";

let messageInput = document.querySelector<HTMLTextAreaElement>(
  "#sendMessage .messageInput"
)!;
let sendButton = document.querySelector<HTMLButtonElement>(
  "#sendMessage .sendButton"
)!;
let infoElement =
  document.querySelector<HTMLParagraphElement>("#sendMessage .info")!;

let setInfo = setInfoFactory(infoElement);
function isReadyToSendMessage() {
  return messageInput.value !== "" && !!localStorage.getItem("webhook-url");
}

messageInput.addEventListener("input", () => {
  sendButton.disabled = !isReadyToSendMessage();
});
messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    if (isReadyToSendMessage()) fetchApiToSendMessage();
  }
});

sendButton.addEventListener("click", () => {
  if (isReadyToSendMessage()) fetchApiToSendMessage();
});

let fetchApiToSendMessage = () => {
  setInfo("Sending...");
  fetch(localStorage.getItem("webhook-url") ?? "", {
    method: "post",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tts: false,
      content: messageInput.value,
    }),
  })
    .then((res) => {
      if (res.ok) {
        messageInput.value = "";
        setInfo("Message Sent Successfully", "success");
      } else
        setInfo(
          fmt`Failed to send message: ${[`Status ${res.status}`, "code"]}`,
          "error"
        );
    })
    .catch((err) => {
      setInfo(fmt`Failed to send message: ${[err, "code"]}`, "error");
    });
};

export {};
