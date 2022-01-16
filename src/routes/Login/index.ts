import {Router, Request, Response} from "express";

class Login {
	router: Router	

	constructor(){
		this.router = Router();
		this.routes()
	}

	post(req: Request, res: Response){
		const data = req;
		res.send('OK login');	
	}

	get(req: Request, res: Response){
		const data = req;
		res.send('OK login');	
	}


	routes(){
		this.router.post('/login', this.post);
		this.router.get('/login', this.get);
	}
}

const login = new Login();
export default login.router;
