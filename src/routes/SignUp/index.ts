import {Request, Response, Router} from "express";
import { check } from 'express-validator'
import { checkFields } from ''

class SignUp {
	router: Router;

	constructor(){
		this.router = Router();
		this.routes()
	}

	post(req: Request, res: Response){
		res.send('Mahman')
	}

	routes(){
		this.router.post('/signup', [
			check('email', 'Email inválido').isEmail(),
			checkFields
		]
		,this.post)
	}
}

const signup = new SignUp();
export default signup.router;
