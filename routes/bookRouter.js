/* eslint-disable no-param-reassign */
const express = require("express");

const booksController = require("../controllers/booksController");

function routes(Book) {
  const bookRouter = express.Router();
  const controller = booksController(Book);

  // Handling /api/books, /api/books/api get route
  // @route /api/books returns all books
  // @route /api/books/:bookId returns a single book with id
  bookRouter.route("/Books").post(controller.post).get(controller.get);

  // Middleware @ route /Books/:bookId
  bookRouter.use("/Books/:bookId", (req, res, next) => {
    Book.findById(req.params.bookId, (err, book) => {
      if (err) {
        return res.send(err);
      }
      if (book) {
        req.book = book;
        return next();
      }
      return res.sendStatus(404);
    });
  });

  bookRouter
    .route("/Books/:bookId")
    .get((req, res) => {
      const returnBook = req.book.toJSON();

      returnBook.links = {};
      const genre = req.book.genre.replace(" ", "%20");
      returnBook.links.FilterByThisGenre = `http://${req.headers.host}/api/books/?genre=${genre}`;
      res.json(returnBook);
    })
    .put((req, res) => {
      const { book } = req;
      book.title = req.body.title;
      book.author = req.body.author;
      book.genre = req.body.genre;
      book.read = req.body.read;
      req.book.save((err) => {
        if (err) {
          return res.send(err);
        }
        return res.json.json(book);
      });
    })
    .patch((req, res) => {
      const { book } = req;

      if (req.book._id) {
        delete req.body._id;
      }
      Object.entries(req.body).forEach((item) => {
        const key = item[0];
        const value = item[1];
        book[key] = value;
      });
      req.book.save((err) => {
        if (err) {
          return res.send(err);
        }
        return res.json(book);
      });
    })
    .delete((req, res) => {
      req.book.remove((err) => {
        if (err) {
          return res.send(err);
        }
        return res.sendStatus(204);
      });
    });

  // Handling /books post route
  bookRouter.route("/books").post((req, res) => {
    const book = new Book(req.body);
    book.save();
    res.status(201).json(book);
  });

  return bookRouter;
}

module.exports = routes;
