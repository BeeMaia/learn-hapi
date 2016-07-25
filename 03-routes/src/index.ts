/// <reference path="../typings/index.d.ts" />

"use strict";

import * as glue from "glue";

let manifest = require("./manifest.json");
let options = {
	relativeTo:__dirname
};

glue.compose(manifest, options, (err, server) => {
	server.start( (err) => {
		if (err) {
			throw err;
		}		
		let server_connections = server.connections;		
		for (let connection of server_connections){			
			console.log('server running at: %s://%s:%s', connection.info.protocol, connection.info.address, connection.info.port);
		}
	})
})