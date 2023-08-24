const Book = require("../models/book");

// About promises in mongoose
// https://mongoosejs.com/docs/promises.html

// About Query operators in MongoDB
// https://www.mongodb.com/docs/v5.0/reference/operator/query/

async function getAll(req, res, next) {
  try {
    // const docs = await Book.find({ verified: true, genre: "Biography" }).exec();
    const docs = await Book.find({ year: { $lt: 2019 } }).exec();

    res.send(docs);
  } catch (error) {
    next(error);
  }
}

async function create(req, res, next) {
  const book = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    year: req.body.year,
  };

  try {
    const doc = await Book.create(book);

    res.status(201).send(doc);
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  const { id } = req.params;

  try {
    const doc = await Book.findById(id).exec();

    if (doc === null) {
      return res.status(404).send({ message: "Book not found" });
    }

    res.send(doc);
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  const { id } = req.params;

  const book = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    year: req.body.year,
  };

  try {
    const doc = await Book.findByIdAndUpdate(id, book, { new: true }).exec();
    // Book.findOneAndUpdate({verified: true}, book)
    // Book.updateOne({ verified: true }, { $set: { verified: true } }) // Update Operators https://www.mongodb.com/docs/manual/reference/operator/update/
    // Book.updateMany({...})

    if (doc === null) {
      return res.status(404).send({ message: "Book not found" });
    }

    res.send(doc);
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next) {
  const { id } = req.params;

  try {
    const doc = await Book.findByIdAndDelete(id).exec();
    // Book.findOneAndDelete({...})
    // Book.deleteOne({...})
    // Bool.deleteMany({...})

    if (doc === null) {
      return res.status(404).send({ message: "Book not found" });
    }

    res.status(204).end();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAll,
  create,
  getById,
  update,
  remove,
};
