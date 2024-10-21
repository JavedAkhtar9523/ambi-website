const express = require('express');
const router = express.Router();
const TeamController = require('../controllers/TeamController');
const {uploadImage} = require('../middlewar/upload'); 

router.post('/',  uploadImage.single('image'), TeamController.createTeamMember);

//router.post('/', TeamController.createTeam);


router.get('/', TeamController.getAllTeam);


router.get('/:id', TeamController.getTeamById);


router.put('/:id', uploadImage.single('image'), TeamController.updateTeamMember);


router.delete('/:id', TeamController.deleteTeam);

module.exports = router;
