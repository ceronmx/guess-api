import Express, {Application} from "express";
import helmet from "helmet";
import morgan from 'morgan';
import mongoose from "mongoose";
import compression from 'compression';
import cors from 'cors';

import IndexRoutes from './routes'
import Login from './routes/Login'
import SignUp from "./routes/SignUp";

class Server {
	public app: Application;

	constructor(){
		this.app = Express();
		this.config()
		this.routes()
	}

	config(){
		//Mongo
		mongoose.connect(process.env.MONGODB_URL!)
		.then(() => console.log('Succesfully connected to mongo'))
		.catch(e => console.log('Error connecting to mongo: ', e))

		//Setting
		this.app.set('port', process.env.PORT || 3000);

		//Middlewares
		this.app.use(morgan('dev'));
		this.app.use(Express.json());
		this.app.use(Express.urlencoded({extended: false}))
		this.app.use(helmet());
		this.app.use(compression());
		this.app.use(cors());
	}

	routes(){
		this.app.use(IndexRoutes)
		this.app.use('/api', Login)
		this.app.use('/api', SignUp)
	}

	start(){
		this.app.listen(this.app.get('port'), () => {
			console.log('Server running on PORT: ', this.app.get('port'))
		})
	}

}

const server = new Server();
server.start()
