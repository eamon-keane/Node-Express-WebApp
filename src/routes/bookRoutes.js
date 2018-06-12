const express = require('express');
const bookService = require('../services/goodreadsService');
const bookController = require('../controllers/bookController');

const bookRouter = express.Router();

// controllers
function router(nav) {
  const { getIndex, getByID, middleware } = bookController(bookService,nav);
  bookRouter.use(middleware);
  bookRouter.route('/')
    .get(getIndex);
  bookRouter.route('/:id')
    .get(getByID);
  return bookRouter;
}


module.exports = router;
