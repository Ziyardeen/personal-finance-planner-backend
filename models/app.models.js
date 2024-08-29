const Expense = require("../db/database.js");
console.log(Expense);
async function insertExpense(expense) {
  try {
    const newExpense = new Expense(expense).save();
    return newExpense;
  } catch (error) {
    throw error;
  }
}
async function fetchExpenses() {
  try {
    const expenses = await Expense.find();
    return expenses;
  } catch (error) {
    throw error;
  }
}

async function fetchExpenseByTitle(title) {
  try {
    const expense = await Expense.findOne({ title: title });
    return expense;
  } catch (error) {
    throw error;
  }
}

async function modifyExpenseByTitle(title, update) {
  try {
    const expenses = await Expense.findOneAndUpdate({ _id: title }, update, {
      returnOriginal: false,
    });
    return expenses;
  } catch (error) {
    throw error;
  }
}
async function removeExpenseByTitle(title) {
  try {
    const expenses = await Expense.findOneAndDelete({ title: title });
    return expenses;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  insertExpense,
  fetchExpenses,
  removeExpenseByTitle,
  modifyExpenseByTitle,
  fetchExpenseByTitle,
};
