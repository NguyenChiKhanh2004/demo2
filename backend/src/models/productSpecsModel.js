// models/ProductSpecsModel.js
const pool = require('../utils/connectDB');

const getAll = async () => {
    try {
        const query = 'SELECT * FROM product_specs';
        const [rows] = await pool.execute(query);
        return rows;

    } catch (error) {
        console.error('Error fetching product specs:', error);
        throw error;
    }

};

const createSpecs = async (newSpecs) => {
    const query = `
        INSERT INTO product_specs (
            product_id, os, screen_type, screen_colors, screen_resolution, screen_size, touch_technology,
            rear_camera, front_camera, cpu_speed, cpu_cores, chipset, gpu, ram, internal_storage,
            external_storage, design, weight, battery_type, battery_capacity, fast_charging,
            wireless_charging, reverse_wireless_charging, sim_type, wifi, gps, bluetooth, nfc, usb,
            audio_jack, fm_radio
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
        newSpecs.product_id, newSpecs.os, newSpecs.screen_type, newSpecs.screen_colors, newSpecs.screen_resolution,
        newSpecs.screen_size, newSpecs.touch_technology, newSpecs.rear_camera, newSpecs.front_camera,
        newSpecs.cpu_speed, newSpecs.cpu_cores, newSpecs.chipset, newSpecs.gpu, newSpecs.ram,
        newSpecs.internal_storage, newSpecs.external_storage, newSpecs.design, newSpecs.weight,
        newSpecs.battery_type, newSpecs.battery_capacity, newSpecs.fast_charging, newSpecs.wireless_charging,
        newSpecs.reverse_wireless_charging, newSpecs.sim_type, newSpecs.wifi, newSpecs.gps, newSpecs.bluetooth,
        newSpecs.nfc, newSpecs.usb, newSpecs.audio_jack, newSpecs.fm_radio
    ];
    const results = await pool.execute(query, values);
    return results[0];
};

const updateSpecs = async (id, updatedSpecs) => {
    const query = `
        UPDATE product_specs 
        SET os = ?, screen_type = ?, screen_colors = ?, screen_resolution = ?, screen_size = ?, touch_technology = ?,
            rear_camera = ?, front_camera = ?, cpu_speed = ?, cpu_cores = ?, chipset = ?, gpu = ?, ram = ?, internal_storage = ?,
            external_storage = ?, design = ?, weight = ?, battery_type = ?, battery_capacity = ?, fast_charging = ?,
            wireless_charging = ?, reverse_wireless_charging = ?, sim_type = ?, wifi = ?, gps = ?, bluetooth = ?, nfc = ?, usb = ?,
            audio_jack = ?, fm_radio = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
    `;
    const values = [
        updatedSpecs.os, updatedSpecs.screen_type, updatedSpecs.screen_colors, updatedSpecs.screen_resolution,
        updatedSpecs.screen_size, updatedSpecs.touch_technology, updatedSpecs.rear_camera, updatedSpecs.front_camera,
        updatedSpecs.cpu_speed, updatedSpecs.cpu_cores, updatedSpecs.chipset, updatedSpecs.gpu, updatedSpecs.ram,
        updatedSpecs.internal_storage, updatedSpecs.external_storage, updatedSpecs.design, updatedSpecs.weight,
        updatedSpecs.battery_type, updatedSpecs.battery_capacity, updatedSpecs.fast_charging, updatedSpecs.wireless_charging,
        updatedSpecs.reverse_wireless_charging, updatedSpecs.sim_type, updatedSpecs.wifi, updatedSpecs.gps,
        updatedSpecs.bluetooth, updatedSpecs.nfc, updatedSpecs.usb, updatedSpecs.audio_jack, updatedSpecs.fm_radio, id
    ];
    const [results] = await pool.execute(query, values);
    return results;
};

const deleteSpecs = async (id) => {
    const query = 'DELETE FROM product_specs WHERE id = ?';
    const [results] = await pool.execute(query, [id]);
    return results;
};

module.exports = {
    getAll,
    createSpecs,
    updateSpecs,
    deleteSpecs
};
