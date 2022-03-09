const db = require("../models")

const index = (req, res) => {
    db.User.find()
        .exec((err, allUsers) => {
            return res.status(200).json({
                message: "Success!",
                data: allUsers
            })
        })
}

const show = async (req, res) => {
    try{
        const foundUser = await db.User.findById(req.userId)
        return res.status(200).json({
            message: "HUZZUH",
            data: foundUser
        })
    } catch(err) {
        console.log(err)
        return res
            .status(500)
            .json({status: 500, message: "Interal Error. Oopsie doodle :((("})
    }
}

module.exports = {
    index, 
    show
}