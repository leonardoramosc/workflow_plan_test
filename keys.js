require('dotenv').config()

module.exports = {
  HOST_PORT: process.env.HOST_PORT,
  GCP_PROJECT_ID: process.env.GCP_PROJECT_ID,
  SAVE_PLAN_TOPIC: process.env.SAVE_PLAN_TOPIC
}