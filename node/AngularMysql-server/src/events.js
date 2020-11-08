const express = require("express");


function createRouter(db) {
  const router = express.Router();
  const owner = "";

  function createRouter(db) {
    const router = express.Router();
    const owner = "";

    router.get("/brand", (req, res, next) => {
      db.query("select * from shop.brand;", [], (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({
            status: "error"
          });
        } else {
          res.status(200).json(results);
        }
      });
    });

    return router;
  }

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