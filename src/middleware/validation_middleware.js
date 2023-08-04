

module.exports = function(func){
    return     (req,res,next)=>{
        const {error} =func(req.body)
        if(error) return res.status(400).json({msg:error.details[0].message})
        next()
    }
}