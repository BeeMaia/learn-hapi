import * as hapi from "hapi";

/*
* create a new task
*/

export default class TaskController {
	public static create(request: hapi.Request, reply: hapi.IReply) {
		reply("creating a task").code(201);
	}

	public static getAll(request: hapi.Request, reply: hapi.IReply) {
		reply("getting all tasks").code(201);
	}
}