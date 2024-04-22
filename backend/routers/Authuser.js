const UsersModel=require('../models/toolsample')
const asynchandle=require('express-async-handler')
const bcrypt=require('bcrypt')
const authuser=asynchandle(async(req,res)=>{
    const { email, password } = req.body;
    try {
        const user = await UsersModel.findOne({ email });
        if (!user) {
            return res.status(404).json( {message:"User not found"} );
        }
        // Compare provided password with hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        res.json( 'Login successful');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});
module.exports=authuser;