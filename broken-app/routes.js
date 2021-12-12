const express=require('express');
const router= new express.Router()
const ExpressError= require('./expressError')

const getDevinfo=require('./getDevinfo')

router.use(express.json());
router.use(express.urlencoded({ extended: true }))


router.post('/', async function(req,res,next){
    try{
        const devs=req.body.developers;
        if(!devs) throw new ExpressError('Enter dev info like this, {developers: [username, ...]}',403)

        const devInfo=await getDevinfo(devs)

        return res.json(devInfo)
    }catch(err){
        return next(err)
    }
});


module.exports=router;