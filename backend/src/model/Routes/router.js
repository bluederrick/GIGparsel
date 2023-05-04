const router = require('express').Router();
const userRegistration = require('../../controllers/User-controller')
const userLogin = require('../../controllers/User-login')
const AuthRole = require('../Auth/AuthRole.js');

// user signup routes
router.post('/user-Signup', userRegistration);


// uuser Login routes
router.post('/user-Login', userLogin);


// user udates ........
router.post('/user-Udates', AuthRole, userUdates);



// user delete and  Admin routes ...........
router.post('/user-Delete', AuthRole, userDelete);


module.exports = router;
