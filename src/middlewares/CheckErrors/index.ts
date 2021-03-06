import { validationResult } from "express-validator";
import { Request, Response } from "express";

export default (req: Request, res: Response, next: any) => {
	const errors = validationResult(req);
	if(!errors.isEmpty()){
		return res.status(400).json({
			ok: false,
			errors: errors.mapped()
		})
	}
}
