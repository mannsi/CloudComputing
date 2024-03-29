// =============================================================================
/**
 * Cloud Computing Cource Exercises
 * Exercise 3
 *  Build A microservice
 * Developed by 'Write Group Name'
 * Write Names of All Members
 */
// =============================================================================
/**
 * BASE SETUP
 * import the packages we need
 */
const express = require('express');
/**
 * import the Services we need
 */
const helloWorldService = require('./services/helloWorld');
const productDescpService = require('./services/productDescp');
const productPriceService = require('./services/productPrice');
/**
 * javascript promises for join function
 */
const join = require("bluebird").join;

const app = express();

const router = express.Router();
/**
 * Middleware to use for all requests
 */
router.use(function(req, res, next) {
    /**
     * Logs can be printed here while accessing any routes
     */
    console.log('Accessing Exercises Routes');
    next();
});
/**
 * Base route of the router : to make sure everything is working check http://localhost:8080/exercises)
 */
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to Cloud Computing Exercises API V3'});
});
/**
 * Exercise 3:
 */
// query params: ?name=SomeName&productId=SomeProductId
router.route('/exercise3')
    .get(function(req, res)
    {
        join(
            helloWorldService.sayWelcome(req.query.name),
            productDescpService.getProductURL(req.query.productId),
            productDescpService.getProductName(req.query.productId),
            productPriceService.getProductPrice(req.query.productId),
            function (resulthelloWorld, productDescpServiceURL, productDescpServiceName,productPriceServicePrice ) {

                var ex3_response_message = {
                    "hello": resulthelloWorld.result,
                    "product_id": req.query.productId,
		    "productPrice": productPriceServicePrice.result,
                    "productURL": productDescpServiceURL.result,
                    "productName": productDescpServiceName.result
                };
                res.send(ex3_response_message);
            }
        );
    });
/**
 * REGISTER OUR ROUTES
 * our router is now pointing to /exercises
 */
app.use('/exercises', router);


module.exports = app;

