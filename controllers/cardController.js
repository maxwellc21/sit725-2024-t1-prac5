const Card = require('../models/card');

const getCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    res.render('index', {
      cardLists: cards
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const createCard = (req, res) => {
  let newCard = new Card({
    title: req.body.title,
    content: req.body.content,
    imageURL: req.body.image
  });
  newCard.save();
  res.redirect("/");
};

module.exports = {
  getCards,
  createCard
};
