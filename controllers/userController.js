const User=require('../models/user');

const getAllUsers = async (req,res,next) => {
    try{
        const user = await User.find();
        res.json(User);
    }
    catch(err){
        next(err);
}
};
const createUser = async (req, res, next) => {
    try{
        const user= await User.create(req.body);
        res.status(201).json(user);
    } catch(err){
        next(err);
    }
    };

    //put/update
const updateUser = async (req, res, next) => {
    try{
        const { first_name } = req.params;
        
        const updated = await User.findOneAndUpdate(first_name, req.body);
        if (!updated) return res.status(404).json({ message: "User not found"});
        return res.status(200).json(updated);

    } catch (err){
        next(err);
    }
};
const deleteUser = async (req, res, next) => {
    try{
        const { id } = req.params;
        
        const deleted = await User.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ message: "User not found"});
        return res.status(200).json({ message: "User deleted successfully", deleted});
    } catch (err){
        next(err);
    }
};


module.exports={
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
};

