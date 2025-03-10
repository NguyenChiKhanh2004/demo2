const Orders = require('../models/ordersModel');

class OrdersController {
    async getAllOrders(req, res) {
        try {
                    const orders = await Orders.getAll();
                    res.status(200).json(orders);
                } catch (error) {
                    res.status(500).json({ message: error.message });
                }

    }
    async createOrders(req, res) {
         const NewOrders = req.body;
                try {
                     const newOrders = await Orders.createOrders(NewOrders);
                     res.status(200).json("NewOrders created successfully");
         
                } catch (error) {
                     res.status(500).json({ message: error.message });
                }
       
    }

    async updateOrders(req, res) {
            const { id } = req.params;
                     const updatedOrders = req.body;
                     try {
                        await Orders.updateOrders(id, updatedOrders);
                        res.status(200).json({ message: "NewOrders updated successfully" });
                     } catch (error) {
                        res.status(500).json({ message: error.message });
                     }
       
    }

    async deleteROrders(req, res) {
        const { id } = req.params;
                try {
                    await Orders.deleteOrders(id);
                    res.status(200).json({ message: "NewOrders deleted successfully" });
                } catch (error) {
                    res.status(500).json({ message: error.message });
      
    }
    }
    async getOrdersByUserId(req, res) {
        const { id } = req.params;
        try {
            const orders = await Orders.getOrdersByUserId(id);
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }}

}
module.exports = new OrdersController;
