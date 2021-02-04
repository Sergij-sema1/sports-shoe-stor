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
  //запись фото в базу к последнему id товара
  router.post("/shop/productFoto", (req, res, next) => {
    db.query(`INSERT INTO shop.productFoto(nameImg,productId)values(?,?);`,
      [req.body.nameImg, req.body.productId], (error) => {
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
  //---------------------------------------------------------------------
  //берем фото из базы к товару для генерации карточки с фото
  router.post("/shop/productFoto/names", (req, res, next) => {
    db.
    query(`select nameImg,productId from  shop.productFoto RIGHT JOIN shop.model on shop.productFoto.productId=${req.body.id};`,
      [req.body.id], (error, results) => {
        console.log(req.body.id)

        if (error) {

          res.status(500).json({
            status: "error"
          });
        } else {

          res.status(200).json(results);

        }
      });
    return router;
  });

  //--------------------------------------------------------------------
  router.post("/shop/productFoto/names/final", (req, res, next) => {
    db.
    query(`select nameImg from  shop.productFoto RIGHT JOIN shop.model on shop.productFoto.productId=${req.body.id};`,
      [req.body.id], (error, results) => {
        console.log(req.body.id)

        if (error) {

          res.status(500).json({
            status: "error"
          });
        } else {

          res.status(200).json(results);

        }
      });
    return router;
  });


  router.post("/shop/order", (req, res, next) => {
    db.query(`
            insert into shop.order(buyerData) values( ? );
            `, [req.body.buyerData],
      (error) => {
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

    db.query(`
            insert into shop.model(name, brandid, price, description) values( ? , ? , ? , ? );
            `, //парамаетризацыя от инекцый

      [req.body.name, req.body.brandid, req.body.price, req.body.description], (error, results) => {
        if (error) {
          //console.log(error);
          res.status(500).json({
            status: "error"
          });
        } else {

          res.status(204).json({
            status: 'ok'

          });

          return console.info(`
            results insertId is: $ {
              results.insertId
            }
            `);



        }

      });

    return router;
  });
  return router;



}
module.exports = createRouter;