var express = require('express');
var router = express.Router();
var database = require('./../models/orders');

// Orders Controller
router.route('/')
  .get(function (req, res){
    database.getAllPizzaOrders(req, res);
  })

  .post(function (req, res) {
    console.log('in post function');
    // res.send(200);
    database.createOrder(req, res);
  })
  .delete(function (req, res) {
    res.send("Fucking deleting orders");

//   .post(function (req, res){
//     // console.log(req.body);
//     database.createOrder(req, res);
//   });

// router.route('/:orderId')
//   .delete(function (req, res){
//     var orderId = req.param('orderId')
//     database.deleteOrder(orderId, res);

  });

module.exports = router;
