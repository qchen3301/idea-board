const router = require('express').Router({mergeParams: true}) //don't forget to mergeParams when going down a route
const {Idea} = require('../db/model')

//create new idea
router.post('/', (req,res) => {
    const newIdea = new Idea( )
    User.findbyId(req.params.userId)
    .then( (user) => {
        user.ideas.push(newIdea)
        return user.save()
    })
    .then((user)=> {
        res.send(user)
    })
})

//baleed roud :DDDD
router.delete('/:id', (req,res) => {
    User.findbyId(req.params.userId)
    .then(user => {
        //update the user as a whole
        //"pull" an idea from user
        //WHERE _id = req.params.id
        return user.update({ $pull: {ideas: {_id: req.params.id} } }) 
    })
    .then(user => {
        res.send(user)
    })
})

// router.delete('/:id', (req,res) => {
//     User.findbyId(req.params.userId)
//     .then(user => {
//         const filteredIdeas = user.ideas.filter(idea => {
//             return idea._id != req.params.id
//         })
//         user.ideas = filteredIdeas
//         return user.save()
//     })
// })

//update route
router.put('/:id', (req,res)=> {
    User.findbyId(req.params.userId)
    .then(user => {
        const idea = user.ideas.id(req.params.id)
        const updatedIdea = req.body

        if(updatedIdea.title) {
            idea.title = updatedIdea.title
        }

        if(updatedIdea.description) {
            idea.description = updatedIdea.description
        }

        return user.save()
    })
    .then(user=> {
        res.send(user)
    })
})

module.exports = router
