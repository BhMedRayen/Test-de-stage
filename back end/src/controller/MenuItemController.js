const MenuItem = require('../models/menuItem'); 
const multer = require('multer');

let filename = ''; 

const mystorage = multer.diskStorage({
    destination: 'upload',
    filename: (req, file, redirect) => {
        let date = Date.now();
        let fn = date + '.' + file.mimetype.split('/')[1];
        redirect(null, fn);
        filename = fn;
    }
});


const upload = multer({ storage: mystorage });

const uploadMiddleware = upload.any('image');

exports.createMenuItem = async (req, res) => {
    try {
        uploadMiddleware(req, res, () => {
            console.log('Request Body:', req.body); 
            const menuItem = new MenuItem(req.body);
            menuItem.image = filename;
            menuItem.save();
            filename = '';
            res.status(201).json(menuItem);
        });
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
