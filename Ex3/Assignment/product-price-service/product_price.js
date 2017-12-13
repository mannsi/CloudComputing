module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:productPrice,cmd:getProductPrice', getProductPrice);

    //Describe the logic inside the function
    function getProductPrice(msg, respond) {
	var input_product_id = msg["productId"]
        var price = 0;
	for (i = 0; i < mockData.length; i++) { 
	    item = mockData[i]
		
	    if (item["product_id"].toString() === input_product_id){
		price = item["product_price"];
		break;
	    }
	}

        respond(null, { result: price.toString() });
    }
}
