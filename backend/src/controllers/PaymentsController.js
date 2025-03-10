const Payments = require('../models/paymentsModel');
const bcrypt = require('bcrypt');

class PaymentsController {
    async getAllPayments(req, res) {
        try {
                    const payments = await Payments.getAll();
                    res.status(200).json(payments);
                } catch (error) {
                    res.status(500).json({ message: error.message });
                }

    }
    async createPayments(req, res) {
         const newPayments = req.body;
                try {
                     const newPayments = await Payments.createPayments(newPayments);
                     res.status(200).json("User created successfully");
         
                } catch (error) {
                     res.status(500).json({ message: error.message });
                }
       
    }

    async updatePayments(req, res) {
            const { id } = req.params;
                    const updatedPayments = req.body;
                    try {
                        await Payments.updatePayments(id, updatedPayments);
                        res.status(200).json({ message: "User updated successfully" });
                    } catch (error) {
                        res.status(500).json({ message: error.message });
       
    }}

    async deletePayments(req, res) {
        const { id } = req.params;
                try {
                    await Payments.deletePayments(id);
                    res.status(200).json({ message: "User deleted successfully" });
                } catch (error) {
                    res.status(500).json({ message: error.message });
        
      
    }}

    async getPaymentsByOrderId(req, res) {
        const { id } = req.params;
        try {
            const payments = await Payments.getPaymentsByOrderId(id);
            res.status(200).json(payments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }}

}
module.exports = new PaymentsController;