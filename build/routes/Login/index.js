"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Login {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    post(req, res) {
        const data = req;
        res.send('OK login');
    }
    get(req, res) {
        const data = req;
        res.send('OK login');
    }
    routes() {
        this.router.post('/login', this.post);
        this.router.get('/login', this.get);
    }
}
const login = new Login();
exports.default = login.router;
