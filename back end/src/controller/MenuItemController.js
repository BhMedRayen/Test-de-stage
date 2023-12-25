
const MenuItem = require('../models/menuItem'); 

exports.createMenuItem = async (req, res) => {
    try {
        console.log('Request Body:', req.body); 
        const menuItem = new MenuItem(req.body);
        await menuItem.save();
        res.status(201).json(menuItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getAllMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getMenuItemById = async (req, res) => {
    try {
        const menuItem = await MenuItem.findById(req.params.id);
        if (!menuItem) {
            return res.status(404).json({ error: 'MenuItem not found' });
        }
        res.status(200).json(menuItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateMenuItem = async (req, res) => {
    try {
        const menuItem = await MenuItem.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!menuItem) {
            return res.status(404).json({ error: 'MenuItem not found' });
        }
        res.status(200).json(menuItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.deleteMenuItem = async (req, res) => {
    try {
        const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
        if (!menuItem) {
            return res.status(404).json({ error: 'MenuItem not found' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
