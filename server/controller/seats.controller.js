const {Seats}= require("../database/index")

module.exports = {
    
 getAll : async (req,res)=>{
    try {
        const result = await Seats.findAll({})
        res.json(result)
    } catch (error) {
        throw error
    }
 
 },

 add : async (req,res)=>{
    try {
        const result = await Seats.create(req.body)
        res.json(result)
    } catch (error) {
        throw error
    }
 },

 updatee : async (req,res)=>{
    try {
        const result = await Seats.update(req.body, {where:{flightId:req.params.flightId}})
        res.json(result)
    } catch (error) {
        throw error
    }
 }
 

}