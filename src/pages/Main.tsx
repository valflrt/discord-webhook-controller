import React from "react";

import SendMessageSection from "../sections/SendMessageSection";
import SetWebhookUrlSection from "../sections/SetWebhookUrlSection";

let Index = () => (
  <>
    <h1>Discord Webhook Controller</h1>
    <SetWebhookUrlSection />
    <SendMessageSection />
  </>
);

export default Index;
