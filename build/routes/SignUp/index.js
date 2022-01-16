"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const _1 = require("");
class SignUp {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    post(req, res) {
        res.send('Mahman');
    }
    routes() {
        this.router.post('/signup', [
            (0, express_validator_1.check)('email', 'Email inválido').isEmail(),
            _1.checkFields
        ], this.post);
    }
}
const signup = new SignUp();
exports.default = signup.router;
