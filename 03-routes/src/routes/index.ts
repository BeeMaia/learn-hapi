/// <reference path="../../typings/index.d.ts" />

import * as hapi from "hapi";
import TaskController from "../controllers/taskController";

export default (server: hapi.Server) => {
	server.route({
		method: 'GET',
		path: '/',
		handler: TaskController.getAll
	});

	server.route({
		method: 'GET',
		path: '/api/v1/tasks',
		handler: TaskController.create		
	});
}