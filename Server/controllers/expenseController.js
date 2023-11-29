const expenseSchema=require('../models/expenseModel');

exports.addExpense=async (req,res)=>{
    const {title,amount,category,description,date}=req.body;
    const expense=expenseSchema({
        title,
        amount,
        category,
        description,
        date
    });

    try{
        if(!title||!category||!date||!description){
            return res.status(400).json({message:'check all the fields!'});
        }
        if(amount<0||amount==='number'){
            return res.status(400).json({message:'Amount must be positive Number!'});
        }
        await expense.save();
        return res.status(200).json({message:'Expense Added Successfully!'});
    }catch(err){
        return res.status(500).json({message:'Error in Adding Expense!'});
    }

}


exports.getExpenses=async (req,res)=>{
    try {
        const expenses=await expenseSchema.find().sort({createdAt:-1});
        res.status(200).json(expenses);
    } catch (err) {
        res.status(500).json({message:'Error in getting Expenses!'});
    }
}



exports.deleteExpense=async (req,res)=>{
    const {id}=req.params;
    expenseSchema.findByIdAndDelete(id)
        .then((expense)=>{
            res.status(200).json({message:'Expense Deleted Successfully!'});
        })
        .catch((err)=>{
            
            res.status(500).json({message:'Error in Expense deletion!'});
        })
}