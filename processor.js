const { PubSub } = require("@google-cloud/pubsub");

const { GCP_PROJECT_ID, SAVE_PLAN_TOPIC } = require("./keys");

async function sendMessage(data) {
  const dataBuffer = Buffer.from(data);
  const pubSubClient = new PubSub({ projectId: GCP_PROJECT_ID });

  try {
    const messageId = await pubSubClient
      .topic(SAVE_PLAN_TOPIC)
      .publishMessage({ data: dataBuffer });
    console.log(`Message ${messageId} published.`);
    return messageId
  } catch (error) {
    console.error(`Received error while publishing: ${error.message}`);
    return null
  }
}

module.exports = { sendMessage }
