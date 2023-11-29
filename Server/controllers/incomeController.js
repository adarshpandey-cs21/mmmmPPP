const incomeSchema=require('../models/incomeModel');

exports.addIncome=async (req,res)=>{
    const {title,amount,category,description,date}=req.body;
    const income=incomeSchema({
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
        await income.save();
        return res.status(200).json({message:'Income Added Successfully!'});
    }catch(err){
        return res.status(500).json({message:'Error in Adding Income!'});
    }

}


exports.getIncomes=async (req,res)=>{
    try {
        const incomes=await incomeSchema.find().sort({createdAt:-1});
        res.status(200).json(incomes);
    } catch (err) {
        res.status(500).json({message:'Error in getting Incomes!'});
    }
}



exports.deleteIncome=async (req,res)=>{
    const {id}=req.params;
    incomeSchema.findByIdAndDelete(id)
        .then((income)=>{
            res.status(200).json({message:'Income Deleted Successfully!'});
        })
        .catch((err)=>{
            
            res.status(500).json({message:'Error in income deletion!'});
        })
}