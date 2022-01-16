"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    displayName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isCompany: { type: Boolean, default: false },
    companyName: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date
});
exports.default = (0, mongoose_1.model)('User', UserSchema);
