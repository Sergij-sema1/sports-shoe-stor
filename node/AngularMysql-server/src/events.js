const {
  json
} = require("express");
const express = require("express");


function createRouter(db) {
  const router = express.Router();
  const owner = "";
  const fs = require('fs');

  // router.get("/shop", function (req, res, next) {
  //   db.query("SELECT * FROM shop.brand;", (error, results) => {

  //     }

  //   });
  // });

  // return router;



  router.post("/shop", function (req, res, next) {

    db.query(`insert into shop.model(name,brandid,price,description) values(?,?,?,?)`, //парамаетризацыя от инекцый

      [req.body.name, req.body.brandid, req.body.price, req.body.description], (error) => {
        if (error) {
          console.log(error);
          res.status(500).json({
            status: "error"
          });
        } else {

          res.status(204).json({
            status: 'ok'
          })
        }
      });

  });
  return router;
}
module.exports = createRouter;