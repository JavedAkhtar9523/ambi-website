const express = require('express');
const router = express.Router();
const careerController = require('../controllers/careerController');

router.post('/careers', careerController.createCareer);


router.get('/careers', careerController.getAllCareers);


router.get('/careers/:id', careerController.getCareerById);


router.put('/careers/:id', careerController.updateCareer);


router.delete('/careers/:id', careerController.deleteCareer);

module.exports = router;