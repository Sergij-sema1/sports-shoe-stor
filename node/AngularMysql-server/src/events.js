const express = require("express");

function createRouter(db) {
  const router = express.Router();
  const owner = "";

  router.get("/brand", function (req, res, next) {
    db.query("SELECT * FROM shop.brand;", [], (err, results, fields) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          status: "error"
        });
      } else {
        res.status(200).json(results);
      }
    });
  });

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