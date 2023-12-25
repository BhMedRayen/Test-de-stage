const express = require('express');
const router = express.Router();
const menuItemController = require('../controller/MenuItemController');

router.post('/', menuItemController.createMenuItem);
router.get('/', menuItemController.getAllMenuItems);
router.get('/:id', menuItemController.getMenuItemById);
router.put('/:id', menuItemController.updateMenuItem);
router.delete('/:id', menuItemController.deleteMenuItem);

module.exports = router;
