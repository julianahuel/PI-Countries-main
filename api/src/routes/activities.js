const {Router} = require ('express')
const router = Router()
const {Country, Activity} = require ('../db')

router.post('/', async (req,res)=>{

    try{

        const {countries, name, difficulty, duration, season} = req.body
        
        const activity = await Activity.create({
            name, difficulty, duration, season
        })
        // console.log(countries)
        countries.map(async c=> await activity.setCountries(await Country.findByPk(c)) )
        // res.status(200).send(activity)

        // console.log(countries, 'EL PAIS')
        // const findOne = await Country.findAll({ where: {id:countries} })   
        // console.log(findOne, 'EL VERDADERO PAIS')
        // const added = await activity.addCountries(findOne)
        
        res.status(200).json(countries)
    }
    catch(err) {console.log(err)}
})


module.exports = router