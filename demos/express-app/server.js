require("dotenv").config();
const webPush = require("web-push");

const express = require("express");
var bodyParser = require('body-parser')
var cors = require('cors')

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const port = 3000;

app.use(cors())

if (!process.env.VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
  console.log(
    "You must set the VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY " +
      "environment variables. You can use the following ones:"
  );
  console.log(webPush.generateVAPIDKeys());
  return;
}

webPush.setVapidDetails(
  "https://serviceworke.rs/",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

let route = "/";

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get(route + "vapidPublicKey", (req, res) => {
    res.send(process.env.VAPID_PUBLIC_KEY);
});

app.post(route + "register", function (req, res) {
res.sendStatus(201);
});

app.post(route + "sendNotification", function (req, res) {
const subscription = req.body.subscription;
const payload = null;
const options = {
    TTL: req.body.ttl,
};

setTimeout(function () {
    webPush
    .sendNotification(subscription, payload, options)
    .then(function () {
        res.sendStatus(201);
    })
    .catch(function (error) {
        console.log(error);
        res.sendStatus(500);
    });
}, req.body.delay * 1000);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
