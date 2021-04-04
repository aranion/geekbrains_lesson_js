const express = require("express");
const stats = require("./stats");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use("/", express.static("./public"));

app.get("/api/products", (req, res) => {
  fs.readFile("./server/db/products.json", "utf-8", (err, data) => {
    if (err) res.send(JSON.stringify({ result: 0, text: err }));
    else res.send(data);
  });
});

app.get("/api/cart", (req, res) => {
  fs.readFile("./server/db/cart.json", "utf-8", (err, data) => {
    if (err) res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    else res.send(data);
  });
});

app.post("/api/cart", (req, res) => {
  fs.readFile("./server/db/cart.json", "utf-8", (err, data) => {
    if (err) res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    else {
      const cart = JSON.parse(data);
      cart.contents.push(req.body);
      fs.writeFile("./server/db/cart.json", JSON.stringify(cart), (err) => {
        if (err) res.send('{ "result": 0 }');
        else {
          res.send('{ "result": 1 }');
          stats(req.body, "post");
        }
      });
    }
  });
});

app.put("/api/cart/:id", (req, res) => {
  fs.readFile("./server/db/cart.json", "utf-8", (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    } else {
      const cart = JSON.parse(data);
      console.log(cart.contents);
      const find = cart.contents.find((el) => el.id === +req.params.id);
      find.quantity += req.body.quantity;
      fs.writeFile("./server/db/cart.json", JSON.stringify(cart), (err) => {
        if (err) res.send('{"result": 0}');
        else {
          res.send('{"result": 1}');
          stats(find, "put");
        }
      });
    }
  });
});

app.delete("/api/cart/:id", (req, res) => {
  fs.readFile("./server/db/cart.json", "utf-8", (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    } else {
      const cart = JSON.parse(data);
      if (req.params.id !== "clear") {
        const find = cart.contents.find(
          (el) => el.id_product === +req.params.id
        );
        cart.contents.splice(cart.contents.indexOf(find), 1);
        fs.writeFile("./server/db/cart.json", JSON.stringify(cart), (err) => {
          if (err) res.send('{ "result": 0 }');
          else {
            res.send('{ "result": 1 }');
            stats(find, "delete");
          }
        });
      } else {
        fs.writeFile(
          "./server/db/cart.json",
          JSON.stringify({ contents: [] }),
          (err) => {
            if (err) res.send('{ "result": 0 }');
            else {
              res.send('{ "result": 1 }');
            }
          }
        );
      }
    }
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listener: ${port} port.`));
