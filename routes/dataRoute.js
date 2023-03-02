const { Router } = require('express');
const express = require('express');
const router = express.Router();
const dbo = require('../db/conn')
const ObjectId = require("mongodb").ObjectId;

//Router 1: Fetch booking data for Admin
router.get('/fetchData', (req, resp) => {
    let db_connect = dbo.getDb("Hotel");
    db_connect
        .collection("Booking")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            resp.json(result);
        });
})

//Router 2: Add Booking Data in Database from User side
router.post('/addData',(req,res) =>{
    let db_connect = dbo.getDb();
    let my_obj={
        email: req.body.email,
        timeline: req.body.time,
        roomtype: req.body.roomtype
    }
    db_connect.collection("Booking").insertOne(my_obj,function(err,res){
        if(err) throw err;
        res.json(res);
    })
})

//Router 3: Update Booking Data

//Router 4: Delete the Data entry from admin pannel
router.delete("/:id",(req,res)=>{
    let db_connect = dbo.getDb();
    let myQuery = {_id:ObjectId(req.params.id)};
    db_connect.collection("Booking").deleteOne(myQuery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        response.json(obj);
    });
})
module.exports = router;