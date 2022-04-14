// import express router
const router = require('express').Router()

// import controller
const users = require('../controllers/users');

router.get('/api/v1/users/:id/notifications', users.getUsersNotification);

router.get('/api/v1/users/:id', users.getSingleData);

router.put('/api/v1/users/:id', users.putData);

router.patch('/api/v1/users/:id', users.patchData);

router.delete('/api/v1/users/:id', users.deleteData);

router.get('/api/v1/users', users.getAllData);

router.post('/api/v1/users', users.postData);

router.get('/api/v2/users', users.getAllDataWithMetadata);

// export router
module.exports = router;