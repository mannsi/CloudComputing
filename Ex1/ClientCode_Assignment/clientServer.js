// =============================================================================
/**
 * Cloud Computing Cource Exercises
 * Exercise 1
 *  2 Tasks
 *      1. Accessing VM information using unauthenticated API
 *      2. Service Level Authentication
 * Developed by 'Write Group Name'
 * Write Names of All Members
 */
// =============================================================================
var cmd=require('node-cmd');


/**
 * BASE SETUP
 * import the packages we need
  */
const express    = require('express');
const app        = express();
const port       = process.env.PORT || 8080; // set our port
/**
 * ROUTES FOR OUR API
 * Create our router
 */
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
    res.json({ message: 'Welcome to Cloud Computing Exercises API!'});
});
/**
 * Exercise 1: Task 1 Route (Accessing VM information, This is also unauthenticated API)
 */
router.route('/exercise1_task1')
    .get(function(req, res)
    {
        /**
         * Hint : http://nodejs.org/api.html#_child_processes
         */
        // ================================================================================================================
        /**
         * TO DO
         * 1. Get the number of current users login into virtual machine
         * 2. Get the names of those users
         * 3. Get the number of storage disks ((we are here only concerned about the disks and that too Virtual disks (vd)))
         * 4. Get size Information about the above disks (disk: size).
         * 5. save in exercise_1_Message
         */
        // =================================================================================================================
	

	
	cmd.get(
		'who | wc -l',
		function(err, num_users_data, stderr)
		{
    		    cmd.get(
			'users',
			function(err, user_names, stderr)
			{
			    var user_names_array = user_names.replace(/\n$/, '').split();
			    cmd.get(
				'fdisk -l | wc -l',
				function(err, num_disks, stderr)
				{			    
				     cmd.get(
					'lsblk -o SIZE',
					function(err, lsblk_output, stderr)
					{			  
					    var lsblk_output_array = lsblk_output.replace(/\n$/, '').split();
					    // First value of output is the string 'SIZE'
					    lsblk_output_array.shift(); // Shift should remove the first item from the array
					    let exercise_1_Message = {
						message: 'exercise_1',
						numberUsers: num_users_data.replace(/\n$/, ''),
						userNames:user_names_array,
						numStorageDisks:num_disks.replace(/\n$/, ''),
						storageDisksInfo:lsblk_output_array
						};
					    res.json( exercise_1_Message);

					});

				});
			});

		});

    });
/**
 * Exercise 1: Task 2 Route (Service Level Authentication)
 */
router.route('/exercise1_task2')
    .get(function(req, res)
    {
        // ================================================================================================================
        /**
         * TO DO
         * 1. Add the default authentication to username: 'CCS' and password as 'CCS_exercise1_task2'.
         * 2. On success authentication return the response with value 'Successful Authentication'.
         * 3. In case of failure return the response with value 'Unsuccessful Authentication'.
         */
        // =================================================================================================================
        let auth;
        /**
         * check whether an autorization header was send
         */
console.log("before auth if");
        if (req.headers.authorization)
        {
            /**
             *  only accepting basic auth, so:
             * cut the starting 'Basic ' from the header
             * decode the base64 encoded username:password
             * split the string at the colon
             * should result in an array
             */
            auth = new Buffer(req.headers.authorization.substring(6), 'base64').toString().split(':');
	    console.log("in if auth");
	    console.log(auth[0]);
	    console.log(auth[1]);
		if (auth[0] === "CCS" && auth[1] ==="CCS_exercise1_task2") {
			res.send('Successful Authentication');
		}
		else {
        		res.send('Unsuccessful Authentication');
		}

        }
	else{
        	res.send('Unsuccessful Authentication');
	}
    });
/**
 * REGISTER OUR ROUTES
 * our router is now pointing to /exercises
 */
app.use('/exercises', router);
/**
 * Start the server
 * our router is now pointing to /exercises
 */
app.listen(port);
console.log('Server started and listening on port ' + port);









