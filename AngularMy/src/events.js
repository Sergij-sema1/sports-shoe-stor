const express = require("express");

function createRouter(db) {
  const router = express.Router();
  const owner = "";

  router.get("/brand", function (req, res, next) {
    db.query("SELECT * FROM shop.`v-model`;", [], (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).json({ status: "error" });
      } else {
        res.status(200).json(results);
      }
    });
  });

  return router;
}

module.exports = createRouter;
