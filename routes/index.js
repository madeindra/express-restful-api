// import express router
const router = require('express').Router()

// import controller
const users = require('../controllers/users');

router.get('/api/v1/users/:id', users.getSingleData);

router.put('/api/v1/users/:id', users.putData);

router.patch('/api/v1/users/:id', users.patchData);

router.delete('/api/v1/users/:id', users.deleteData);

router.get('/api/v1/users', users.getAllData);

router.post('/api/v1/users', users.postData);

// export router
module.exports = router;