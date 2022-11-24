const express = require("express");
const cors = require("cors");

const processor = require('./processor')
const { HOST_PORT } = require("./keys");

const app = express();
app.use(cors());
app.use(express.json());


app.post("/plan", async (req, res) => {
  const { code, amount } = req.body;

  if (!code || !amount || isNaN(amount) || amount < 0) {
    return res.status(400).json({ error: "invalid fields" });
  }

  const plan = JSON.stringify({ code, amount })
  const messageId = await processor.sendMessage(plan)

  if (messageId) {
    return res.json({ message: `Plan saved successfully`, data: { messageId } })
  }

  return res.json({ error: `unable to save plan` })
});

app.listen(HOST_PORT, () => {
  console.log(`app listening on port ${HOST_PORT}`);
});
