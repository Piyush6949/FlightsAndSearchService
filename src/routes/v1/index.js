const express = require('express');
const router = express.Router();

const cityController = require('../../controllers/city-controller');

router.post('/city',cityController.createCity);
router.get('/city' ,cityController.getCity);
router.patch('/city/:id' ,cityController.updateCity);
router.delete('/city/:id',cityController.deleteCity);

module.exports = router;