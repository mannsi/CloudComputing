/**
 * import the seneca package
 */
const seneca = require('seneca')();
const Promise = require('bluebird');
const config = require('../config');
/**
 * Convert act to Promise
 */
const act = Promise.promisify(seneca.client({ host: config.product_descp_service.host, port: config.product_descp_service.port }).act, { context: seneca });

/**
 * To DO: Define Service Method
 */
const GET_URL = { role: 'productURL', cmd: 'getProductURL' };
const GET_NAME = { role: 'productName', cmd: 'getProductName' };


const getProductURL = (productId) => {
    return act(Object.assign({}, GET_URL, { productId }));
};

const getProductName = (productId) => {
    return act(Object.assign({}, GET_NAME, { productId }));
};

/**
 * Call Service Method
 */
//const getProductURL = (productId) => {
    /**
     * To DO: Write act Method
     */
//};
//const getProductName = (productId) => {
    /**
     * To DO: Write act Method
     */
//};
module.exports = {
    getProductURL,
    getProductName
};
