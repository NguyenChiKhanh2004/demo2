const Warehouse = require('../models/warehouseModel');

class WarehouseController {
    // Lấy danh sách kho hàng
    async getAllWarehouse(req, res) {
        try {
            const warehouses = await Warehouse.getAll();
            res.status(200).json(warehouses);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Thêm kho hàng mới
    async createWarehouse(req, res) {
        const newWarehouse = req.body;
        try {
            // Kiểm tra xem kho đã tồn tại chưa
            const existingWarehouse = await Warehouse.checkWarehouse(newWarehouse.variant_id, newWarehouse.warehouse_name);
            if (existingWarehouse.length > 0) {
                return res.status(400).json({ message: "Kho hàng đã tồn tại" });
            }

            const warehouse = await Warehouse.createWarehouse(newWarehouse);
            res.status(200).json({ message: "Kho hàng được tạo thành công", warehouse });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Cập nhật thông tin kho hàng
    async updateWarehouse(req, res) {
        const { id } = req.params;
        const updatedWarehouse = req.body;
        try {
            await Warehouse.updateWarehouse(id, updatedWarehouse);
            res.status(200).json({ message: "Kho hàng được cập nhật thành công" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Xóa kho hàng
    async deleteWarehouse(req, res) {
        const { id } = req.params;
        try {
            await Warehouse.deleteWarehouse(id);
            res.status(200).json({ message: "Kho hàng đã bị xóa" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new WarehouseController();
