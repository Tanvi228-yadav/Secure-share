const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
    userId: { type: String, required: true }, // ID of the user
    action: { type: String, required: true }, // Description of the action performed
    fileAccessed: { type: String, required: true }, // Name of the file accessed
    timestamp: { type: Date, default: Date.now }, // Time of the action
    ipAddress: { type: String, required: true }, // IP address of the user
}, { timestamps: true });

const AuditLog = mongoose.model('AuditLog', auditLogSchema);

module.exports = AuditLog;