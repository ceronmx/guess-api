import {Schema, model} from "mongoose";

const UserSchema = new Schema({
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	displayName: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true},
	isCompany: {type: Boolean, default: false},
	companyName: {type: String},
	createdAt: {type: Date, default: Date.now},
	updatedAt: Date
})

export default model('User', UserSchema)
