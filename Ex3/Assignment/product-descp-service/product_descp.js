module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:productURL,cmd:getProductURL', getProductURL);
    this.add('role:productName,cmd:getProductName', getProductName);

    //Describe the logic inside the function
    function getProductURL(msg, respond) {
	var input_product_id = msg["productId"]
	var productURL="";
	for (i = 0; i < mockData.length; i++) { 
	    item = mockData[i]	    
		
	    if (item["product_id"].toString() === input_product_id){
		productURL = item["product_url"];
		break;
	    }
	}

        respond(null, { result: productURL });
    }
   
    function getProductName(msg, respond) {
	var input_product_id = msg["productId"]
	var productName = "";	
	for (i = 0; i < mockData.length; i++) { 
	    item = mockData[i]
		
	    if (item["product_id"].toString() === input_product_id){
		productName = item["product_name"];
		break;
	    }
	}

        respond(null, { result: productName });
    }


}
