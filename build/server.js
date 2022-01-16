"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const Login_1 = __importDefault(require("./routes/Login"));
const SignUp_1 = __importDefault(require("./routes/SignUp"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        //Mongo
        mongoose_1.default.connect(process.env.MONGODB_URL)
            .then(() => console.log('Succesfully connected to mongo'))
            .catch(e => console.log('Error connecting to mongo: ', e));
        //Setting
        this.app.set('port', process.env.PORT || 3000);
        //Middlewares
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((0, helmet_1.default)());
        this.app.use((0, compression_1.default)());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.use(routes_1.default);
        this.app.use('/api', Login_1.default);
        this.app.use('/api', SignUp_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server running on PORT: ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
