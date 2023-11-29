const Router=require('express').Router();
const incomeController=require('../controllers/incomeController');
const expenseController=require('../controllers/expenseController');


Router.post('/add-income',incomeController.addIncome)
    .get('/get-incomes',incomeController.getIncomes)
    .delete('/delete-income/:id',incomeController.deleteIncome)
    .post('/add-expense',expenseController.addExpense)
    .get('/get-expenses',expenseController.getExpenses)
    .delete('/delete-expense/:id',expenseController.deleteExpense)





module.exports=Router;

