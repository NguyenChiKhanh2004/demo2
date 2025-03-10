
const OrderItems = require('../models/orderItemsModel');

class OrderItemsController {
    async getAllOdersItems(req, res) {
        try {
                    const orderItems = await OrderItems.getAll();
                    res.status(200).json(orderItems);
                } catch (error) {
                    res.status(500).json({ message: error.message });
                }

    }
    async createOrderItems(req, res) {
            const NewOrderItems = req.body;
                    try {
                        const newOrderItems = await OrderItems.createOrderItems(NewOrderItems);
                        res.status(200).json("NewOrderItems created successfully");
            
                    } catch (error) {
                        res.status(500).json({ message: error.message });
                    }
       
    }

    async updateOrderItems(req, res) {
            const { id } = req.params;
                    const updatedOrderItems = req.body;
                    try {
                        await OrderItems.updateOrderItems(id, updatedOrderItems);
                        res.status(200).json({ message: "NewOrderItems updated successfully" });
                    } catch (error) {
                        res.status(500).json({ message: error.message });
       
    }}

    async deleteOrderItems(req, res) {
        const { id } = req.params;
                try {
                    await OrderItems.deleteOrderItems(id);
                    res.status(200).json({ message: "NewOrderItems deleted successfully" });
                } catch (error) {
                    res.status(500).json({ message: error.message });
      
    }}
    async getOrderItemsByOrderId(req, res) {
        const { id } = req.params;
        try {
            const orderItems = await OrderItems.getOrderItemsByOrderId(id);
            res.status(200).json(orderItems);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }}


}
module.exports = new OrderItemsController;