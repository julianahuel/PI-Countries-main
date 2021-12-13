const {Router} = require ('express')
const {Sequelize} = require('sequelize')
const Op = Sequelize.Op
const router = Router()
const {Country, Activity} = require('../db')

router.get('/', async (req,res)=>{

    const {name} = req.query

    if(name){
        const coun = await Country.findAll({
            where: {name: { [Op.iLike]: `%${name}%` }},
            include: Activity
        })
        res.status(200).send(coun)
        console.log('Lo encontre!')
    }
    else {
        const all = await Country.findAll({include: Activity})
        res.send(all)
        console.log('Te paso todos porque no encontre el que me pediste')
    }
    
})

router.get ('/:id', async (req,res)=>{

    const {id} = req.params
    const find = await Country.findByPk(id.toUpperCase(), {include: Activity})

    if(find){
        res.status(200).send(find)
    } else res.status(404).send('Country not found')
})

module.exports = router