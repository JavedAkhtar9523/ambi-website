const Contact = require('../models/Contact');

exports.createContactMessage = async (req, res) => {
    try {
        const { name, email_or_phone, company, position, message } = req.body;

        
        const newContact = new Contact({
            name,
            email_or_phone,
            company,
            position,
            message
        });

       
        await newContact.save();

        return res.status(201).json({
            success: true,
            message: "Contact message submitted successfully",
            data: newContact
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        });
    }
};
