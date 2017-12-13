module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:productURL,cmd:getProductURL', getProductURL);
    this.add('role:productName,cmd:getProductName', getProductName);

    //Describe the logic inside the function
    function getProductURL(msg, respond) {
	console.log("In function 'getProductURL' in 'product_descp' service");
        respond(null, { result: "URL" });
    }
   
    function getProductName(msg, respond) {
	console.log("In function 'getProductName' in 'product_descp' service");
        respond(null, { result: "Product Name" });
    }


}
