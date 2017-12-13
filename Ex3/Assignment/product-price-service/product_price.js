module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:productPrice,cmd:getProductPrice', getProductPrice);

    //Describe the logic inside the function
    function getProductPrice(msg, respond) {
	console.log("In function 'getProductPrice' in 'product_price' service");
        respond(null, { result: "100" });
    }
}
