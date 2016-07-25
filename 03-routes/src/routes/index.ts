/// <reference path="../../typings/index.d.ts" />

import * as hapi from "hapi";

export default (server: hapi.Server) => {
	server.route({
		method: 'GET',
		path: '/',
		handler: (request, reply) => {
			reply("hello");
		}
	});

	server.route({
		method: 'GET',
		path: '/api/v1/tasks',
		handler: (request, reply) => {
			reply("hello from tasks")
		}
	});	
}