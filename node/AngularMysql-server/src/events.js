const {
  response,
  json
} = require("express");
const express = require("express");


function createRouter(db) {
  const router = express.Router();
  //получение последнего Id добавленного товара
  router.get("/shop/lastProductId", (req, res, next) => {
    db.query(`SELECT MAX(id) FROM shop.model;`, [], (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).json({
          status: "error"
        });
      } else {
        res.status(200).json(results);
      }
    });
    return router;
  });
  //запись фото в базу
  router.post("/shop/productFoto", (req, res, next) => {
    db.query(`INSERT INTO shop.productFoto(nameImg,productId)values(?,?);`,
      [req.body.buyerData], (error) => {
        if (error) {
          //console.log(error);
          res.status(500).json({
            status: "error"
          });
        } else {
          res.status(204).json({
            status: 'ok',

          });

        }
      });
    return router;
  });



  router.post("/shop/order", (req, res, next) => {
    db.query(`insert into shop.order(buyerData) values(?)`,
      [req.body.buyerData], (error) => {
        if (error) {
          //console.log(error);
          res.status(500).json({
            status: "error"
          });
        } else {
          res.status(204).json({
            status: 'ok'
          })

        }
      });
    return router;
  });


  router.get("/shop/brand", function (req, res, next) {
    db.query("SELECT * FROM shop.brand", [], (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).json({
          status: "error"
        });
      } else {
        res.status(200).json(results);
      }
    });
    return router;
  });

  router.get("/shop/model", function (req, res, next) {
    db.query("SELECT * FROM shop.model;", [], (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).json({
          status: "error"
        });
      } else {
        res.status(200).json(results);
      }
    });
    return router;
  });

  router.post("/shop/model", function (req, res, next) {

    db.query(`insert into shop.model(name,brandid,img,price,description) values(?,?,?,?,?)`, //парамаетризацыя от инекцый

      [req.body.name, req.body.brandid, req.body.img, req.body.price, req.body.description], (error, result) => {
        if (error) {
          //console.log(error);
          res.status(500).json({
            status: "error"
          });
        } else {

          res.status(204).json({
            status: 'ok'

          });

          return console.log(result.insertId);



        }

      });

    return router;
  });
  return router;



}
module.exports = createRouter;