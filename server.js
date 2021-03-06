require('dotenv').config()
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var passport = require('passport');
var authController = require('./auth');
//var authJwtController = require('./auth_jwt');
//db = require('./db')(); //global hack
//var jwt = require('jsonwebtoken');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());

var router = express.Router();

/*router.route('/post')
    .post(authController.isAuthenticated, function (req, res) {
            console.log(req.body);
            res = res.status(200);
            if (req.get('Content-Type')) {
                console.log("Content-Type: " + req.get('Content-Type'));
                res = res.type(req.get('Content-Type'));
            }
            res.send(req.body);
        }
    );

router.route('/get')
    .get(function (req, res) {
            var header = req.headers;
            var body = req.body;

            if (Object.keys(req.headers).length === 0) {
                header = "No header sent";
            }
            if (Object.keys(req.body).length === 0) {
                body = "No Body sent";
            }
            console.log(req.body);
            res = res.status(200);
            if (req.get('Content-Type')) {
                console.log("Content-Type: " + req.get('Content-Type'));
                res = res.type(req.get('Content-Type'));
            }

            res.json({Headers: header, Body: body, KEY: process.env.SECRET_KEY});
        }
    );

router.route('/delete')
    .delete(authController.isAuthenticated, function (req, res) {

        var header = req.headers;
        var body = req.body;

        if (Object.keys(req.headers).length === 0) {
                header = "No header sent";
            }

            if (Object.keys(req.body).length === 0) {
                body = "No Body sent";
            }
            console.log(req.body);
            res = res.status(200);
            if (req.get('Content-Type')) {
                console.log("Content-Type: " + req.get('Content-Type'));
                res = res.type(req.get('Content-Type'));
            }

            res.json({Headers: header, Body: body, KEY: process.env.SECRET_KEY});
        }
    );

router.route('/put')
    .put(function (req, res) {

            var header = req.headers;
            var body = req.body;

            if (Object.keys(req.headers).length === 0) {
                header = "No header sent";
            }
            if (Object.keys(req.body).length === 0) {
                body = "No Body sent";
            }
            console.log(req.body);
            res = res.status(200);
            if (req.get('Content-Type')) {
                console.log("Content-Type: " + req.get('Content-Type'));
                res = res.type(req.get('Content-Type'));
            }
            res.json({Headers: header, Body: body, KEY: process.env.SECRET_KEY});
        }
    );


router.route('/postjwt')
    .post(authJwtController.isAuthenticated, function (req, res) {
            console.log(req.body);
            res = res.status(200);
            if (req.get('Content-Type')) {
                console.log("Content-Type: " + req.get('Content-Type'));
                res = res.type(req.get('Content-Type'));
            }
            res.send(req.body);
        }
    );

    */
/*
router.route('/delete')
    .all(authController.isAuthenticated, function(req, res) {
        if (req.method != "DELETE")
            res.json({Error: 'This request method is not supported!'});
        else {
            if (Object.keys(req.query).length === 0) {
                req.query = "No query sent";
            }
        }
    })

router.route('/get')
    .all(function(req, res){
        if(req.method != "GET")
            res.json({Error:'This request method is not supported!'});
        else {
            if (Object.keys(req.query).length === 0) {
                req.query = "No query sent";
            }
        }
    });

router.route('/put')
    .all(function(req, res) {
        if (req.method != "PUT")
            res.json({Error: 'This request method is not supported!'});
        else {
            if (Object.keys(req.query).length === 0) {
                req.query = "No query sent";
            }
        }
    })
router.route('post')
    .all(function(req, res) {
        if (req.method != "POST")
            res.json({Error: 'This request method is not supported!'});
        else {
            if (Object.keys(req.query).length === 0) {
                req.query = "No query sent";
            }
        }
    }); */
//_________________________________________________________________________________________________________
router.route('/delete')
    .all(authController.isAuthenticated, function(req, res) {
        if (req.method != "DELETE")
            res.json({Error: 'This request method is not supported!'});
        else {
            if (Object.keys(req.query).length === 0) {
                req.query = "No query sent."
            }
            res.json({Query: req.query, Headers: req.headers, Body: req.body, KEY: process.env.SECRET_KEY});
        }
    })

router.route('/get')
    .all(function(req, res){
        if(req.method != "GET")
            res.json({Error:'This request method is not supported!'});
        else {
            if (Object.keys(req.query).length === 0) {
                req.query = "No query sent";
            }
			res.json({Query: req.query, Headers: req.headers, Body: req.body, KEY: process.env.SECRET_KEY});
        } 
    });

router.route('/put')
    .all(function(req, res) {
        if (req.method != "PUT")
            res.json({Error: 'This request method is not supported!'});
        else {
            if (Object.keys(req.query).length === 0) {
                req.query = "No query sent";
            }
			res.json({Query: req.query, Headers: req.headers, Body: req.body, KEY: process.env.SECRET_KEY});
        } 
    })
router.route('/post')
    .all(function(req, res) {
        if (req.method != "POST")
            res.json({Error: 'This request method is not supported!'});
        else {

            if (Object.keys(req.query).length === 0) {
                req.query = "No query sent";
            }
			res.json({Query: req.query, Headers: req.headers, Body: req.body, KEY: process.env.SECRET_KEY});
        } 
    });
/*
router.post('/signup', function(req, res) {
    if (!req.body.username || !req.body.password) {
        res.json({success: false, msg: 'Please pass username and password.'});
    } else {
        var newUser = {
            username: req.body.username,
            password: req.body.password
        };
        // save the user
        db.save(newUser); //no duplicate checking
        res.json({success: true, msg: 'Successful created new user.'});
    }
});

router.post('/signin', function(req, res) {

        var user = db.findOne(req.body.username);

        if (!user) {
            res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
        }
        else {
            // check if password matches
            if (req.body.password == user.password)  {
                var userToken = { id : user.id, username: user.username };
                var token = jwt.sign(userToken, process.env.SECRET_KEY);
                res.json({success: true, token: 'JWT ' + token});
            }
            else {
                res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
            }
        };
});
*/
app.use('/', router);
app.listen(process.env.PORT || 8080);
