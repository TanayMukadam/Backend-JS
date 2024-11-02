import express from "express";
import cors from 'cors'

const app = express();

// app.use(cors())
const port = 3000

// app.get('/', (req, res) => {
//     res.send("Server is ready")
// })

// List of 5 Jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
      {
        id: 1,
        title: "Parallel Lines",
        content:
          "Parallel lines have so much in common... it’s a shame they’ll never meet.",
      },
      {
        id: 2,
        title: "Time Flies",
        content:
          "Why did the scarecrow win an award? Because he was outstanding in his field!",
      },
      {
        id: 3,
        title: "Ghost Joke",
        content:
          "Why did the ghost go to the party? Because he heard it was going to be a *boo*-last!",
      },
      {
        id: 4,
        title: "Math Problems",
        content:
          "Why did the math book look sad? Because it had too many problems.",
      },
      {
        id: 5,
        title: "Hungry Computer",
        content: "Why was the computer cold? It left its Windows open.",
      },
    ];

    res.json(jokes)

});

app.listen(port, () => {
    console.log(`Listening app on ${port}`);
    
})
