const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const wordList = [];
const staticFolder = path.join(__dirname, "static");

app.use(express.static(staticFolder));
app.use(express.json());

app.get("/hello", (req, res) => {
    const jsonData = {
        msg: "hello world"
    }
    res.send(jsonData);
})

app.get("/echo/:id", (req, res) => {
    const idParam = req.params.id;
    res.json({id: idParam});
})

app.post("/sum", (req, res) => {
    const numbers = req.body.numbers;
    if(!Array.isArray(numbers)){
        return res.status(400).json({error: "Invalid output, it has to be an array"})
    }

    const sum = numbers.reduce((aux,num) => aux + num , 0)

    res.json({sum: sum})
})

app.post('/list', (req, res) => {
  const inputText = req.body.text;
  if (!inputText) {
    return res.status(400).json({ error: 'Invalid input. Text cannot be empty.' });
  }

  wordList.push(inputText);
  res.json({ wordList });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });