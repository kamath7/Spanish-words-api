const router = require("express").Router();
const Word = require("..//models/Word");

router.get("/", async (req, res) => {
  try {
    const words = await Word.find();
    res.status(200).json({ words });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post("/add", async (req, res) => {
  const word = new Word({
    englishWord: req.body.englishWord,
    spanishWord: req.body.spanishWord,
    spanishSentence: req.body.spanishSentence,
    englishSentence: req.body.englishSentence,
  });

  word
    .save()
    .then(() =>
      res.status(201).json({
        message: "New Word Added/Nueva Palabra Agregada",
        word,
      })
    )
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.delete("/delete/:id", async (req, res) => {
  Word.findByIdAndDelete(req.params.id)
    .then((word) => {
      res.status(202).json({ message: "Word deleted", word });
    })
    .catch((err) => {
      res.status(401).json({ error: err });
    });
});

module.exports = router;
