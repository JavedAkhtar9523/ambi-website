const TeamMember = require('../models/TeamMember'); 

exports.createTeamMember = async (req, res) => {
    try {
        const imageUrl = req.file ? req.file.path : null; 
        
        const { name, role, department, bio, contactInfo } = req.body; 

        const newTeamMember = new TeamMember({
            name,
            role,
            department,
            bio,
            contactInfo,
            image: imageUrl, 
        });

        const savedTeamMember = await newTeamMember.save(); 
        res.status(201).json({ message: 'Team member added successfully', personnel: savedTeamMember });
    } catch (err) {
        res.status(500).json({ message: 'Error adding team member', error: err.message });
    }
};




exports.createTeam = async (req, res) => {
    try {
      const newTeam = new TeamMember(req.body);
      const savedTeam = await newTeam.save();
      res.status(201).json({ message: 'Team member added successfully', personnel: savedTeam });
    } catch (err) {
      res.status(500).json({ message: 'Error adding Team member', error: err.message });
    }
  };

exports.getAllTeam = async (req, res) => {
    try {
        const personnel = await TeamMember.find();
        res.status(200).json({ message: 'Fetched all Team members successfully', personnel });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching Team members', error: err.message });
    }
};

// Get a specific Team member entry by ID
exports.getTeamById = async (req, res) => {
    try {
        const personnel = await TeamMember.findById(req.params.id);
        if (!personnel) {
            return res.status(404).json({ message: 'Team member not found' });
        }
        res.status(200).json({ message: 'Fetched Team member successfully', personnel });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching Team member', error: err.message });
    }
};

// Update a Team member entry
exports.updateTeamMember = async (req, res) => {
    try {
        const { name, role, department, bio, contactInfo } = req.body; 
        const imageUrl = req.file ? req.file.path : null; 

        const updatedTeamMember = await TeamMember.findByIdAndUpdate(
            req.params.id,
            { name, role, department, bio, contactInfo, image: imageUrl }, 
            { new: true, runValidators: true } 
        );

        if (!updatedTeamMember) {
            return res.status(404).json({ message: 'Team member not found' });
        }

        res.status(200).json({ message: 'Team member updated successfully', personnel: updatedTeamMember });
    } catch (err) {
        res.status(500).json({ message: 'Error updating team member', error: err.message });
    }
};


// Delete a Team member entry
exports.deleteTeam = async (req, res) => {
    try {
        const deletedPersonnel = await TeamMember.findByIdAndDelete(req.params.id); // Fix typo here
        if (!deletedPersonnel) {
            return res.status(404).json({ message: 'Team member not found' });
        }
        res.status(200).json({ message: 'Team member deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting Team member', error: err.message });
    }
};
