/**
 * import the seneca package
 */
const seneca = require('seneca')();
const Promise = require('bluebird');
const config = require('../config');
/**
 * Convert act to Promise
 */
const act = Promise.promisify(seneca.client({ host: config.product_price_service.host, port: config.product_price_service.port }).act, { context: seneca });

/**
 * To DO: Define Service Method
 */
const GET_PRICE = { role: 'productPrice', cmd: 'getProductPrice' };

/**
 * To DO: Call Service Method
 */
const getProductPrice = (productId) => {
    return act(Object.assign({}, GET_PRICE, { productId }));
};

//const getProductPrice = (productId) => {
//    /**
//    * To DO: Write act Method
//     */
//};
module.exports = {
    getProductPrice
};
