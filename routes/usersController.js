const router = require('express').Router()
const {User} = require('../db/model')

//Show All
//async goes before function is declared
router.get('/', async (req,res) => {
    const users = await User.find()
    res.send(users)
})

//Show One
router.get('/:id', async (req,res) => {
    const user = await User.findById(req.params.id)
    res.send(user)
})

//Create
router.post('/', async (req, res) => {
    const newUser = await User.create(req.body)
    res.send(newUser)
})

//Update
router.put('/:id', async (req,res) => {
    //first params: 'findbyid' = get the data from req.params.id
    //second param: 'andupdate' = get the data from req.body
    //third param: return the updated information, as opposed to the original info
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true}) 
    res.send(user)
})

//Delete
router.delete('/:id', async (req,res) => {
    const user = await User.findByIdAndRemove(req.params.id)
    res.sendStatus(200)
})

module.exports = router