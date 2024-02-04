require("dotenv").config();
const express = require("express");
const { exec } = require("child_process");
const app = express();
const cors = require("cors");
const router = require("./router");
const PORT = 3001;
const mongoose = require("mongoose");

app.use(express.json());

app.post("/runPythonScript", (req, res) => {
  const { num_meals, name, items } = req.body;

  if (!num_meals || !name || !items) {
    res.status(400).send({ error: "Arguments arg1 and arg2 are required." });
    return;
  }

  exec(
    "python src/components/utils/main.py ${num_meals} ${name} ${items}",
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).send({ error: error.message });
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        res.status(500).send({ error: stderr });
        return;
      }
      console.log(`stdout: ${stdout}`);
      res.send({ output: stdout });
    }
  );
});

app.use(cors());

app.use(router);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("mongoose is working, listening on port 3001");
});

app.listen(PORT);
