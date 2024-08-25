const { Expense } = require("../db/database");

async function clearExpenseCollection() {
  try {
    await Expense.deleteMany({});
    console.log("All documents deleted successfully");
  } catch (err) {
    console.log(err);
  }
}
