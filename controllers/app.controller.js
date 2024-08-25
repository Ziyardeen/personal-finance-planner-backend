const {
  insertExpense,
  fetchExpenses,
  removeExpenseByTitle,
  fetchExpenseByTitle,
  modifyExpenseByTitle,
} = require("../models/app.models");

const postExpense = (req, res, next) => {
  const expense = req.body;
  insertExpense(expense)
    .then((expense) => {
      console.log(expense);
      res.status(201).send(expense);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
const getExpenses = (req, res, next) => {
  fetchExpenses()
    .then((expense) => {
      console.log(expense);
      res.status(201).send(expense);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
const getExpenseByTitle = (req, res, next) => {
  const { title } = req.params;
  console.log(title, "<<<<<");
  fetchExpenseByTitle(title)
    .then((expense) => {
      console.log(expense);
      res.status(201).send(expense);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
const deleteExpsenseByTitle = (req, res, next) => {
  const { title } = req.params;
  console.log(title);
  removeExpenseByTitle(title)
    .then((expense) => {
      console.log(expense);
      res.status(201).send(expense);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
const updateExpenseByTitle = (req, res, next) => {
  const update = req.body;
  const { title } = req.params;
  modifyExpenseByTitle(title, update)
    .then((expense) => {
      console.log(expense);
      res.status(201).send(expense);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

module.exports = {
  postExpense,
  getExpenses,
  getExpenseByTitle,
  deleteExpsenseByTitle,
  updateExpenseByTitle,
};
