const express = require('express');

const bookRouter = express.Router();

function router(nav) {
  const books = [
    {
      title: 'war and peace',
      genre: 'Historical fiction',
      author: 'lev Nikolayevich Tolstoy',
      read: false
    },
    {
      title: 'the Time Machine',
      genre: 'Science Fiction',
      author: 'H. G. Wells',
      read: false
    },
    {
      title: 'Les Miserables',
      genre: 'Historical fiction',
      author: 'Victor Hugo',
      read: false
    },
    {
      title: 'A Journey into the Center of the Earth',
      genre: 'Science Fiction',
      author: 'Jules verne',
      read: false
    },
  ];
  bookRouter.route('/')
    .get((req, res) => {
      res.render('bookListView',
        {
          nav,
          title: 'Library',
          books
        });
    });
  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render('bookView',
        {
          nav,
          title: 'Library',
          book: books[id],
        });
    });
  return bookRouter;
}

module.exports = router;
