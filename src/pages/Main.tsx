import React from "react";

import SendMessageSection from "../sections/SendMessageSection";
import SetWebhookUrlSection from "../sections/SetWebhookUrlSection";
import SendEmbedSection from "../sections/SendEmbedSection";

let Index = () => (
  <>
    <h1>Discord Webhook Controller</h1>
    <SetWebhookUrlSection />
    <SendMessageSection />
    <SendEmbedSection />
  </>
);

export default Index;
