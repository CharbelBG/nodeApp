const data = require('../data/data');

const isValid = (req,res)=>{
    const {key} = req.body;
    if(!key){
        res.status(400);
        throw new Error('Please fill an key value');
    }

    if(data.includes(key)){
        res.status(200).json({message:'user has access to the certifiacte'});
    }else{
        res.status(400).json('user does not have acess to the certificate');
    }
}

module.exports = {
    isValid,
}