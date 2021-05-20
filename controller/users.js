import User from '../models/userModel.js'
var users = [];
export const getUser = async(req, res) =>{

const allusers = await User.find({});
res.send(allusers);

}

export const addUser = async(req, res) =>{

    var obj = {
           
           firstName: req.body.fName,
           lastName: req.body.lName,
           email: req.body.email,
           password: req.body.password

    }
const user = await User.create(obj)
res.send(user)

}
export const getIndividualUser = async(req, res) =>{

let id = req.params.id;
const founduser = await User.findById(id);

res.send (founduser)
}

export const updateUser = async(req, res) =>{

    let id = req.params.id;
    const founduser = await User.findById(id);
    if(req.body.fName){
        founduser.firstName = req.body.fName;
    }

    if(req.body.lName){
        founduser.lastName = req.body.lName;
    }

    if(req.body.email){
        founduser.email = req.body.email;
    }

    const updatedUser = await founduser.save();
    res.send(updatedUser);
}

export const deleteUser = async(req, res) => {

    let id = req.params.id;
    await User.findByIdAndDelete(id)
res.json({messages:"userDeleted"})
}





