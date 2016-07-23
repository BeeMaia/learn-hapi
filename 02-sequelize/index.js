/// <reference path="./typings/index.d.ts" />
"use strict";
var sequelize = require("sequelize");
// needed for file creation
var fs = require("fs");
// needed for end of line char
var os = require("os");
// 1. configure db connection
var sql = new sequelize("jjude", "jjude", "", {
    dialect: "postgres",
    port: 5432,
    /**
     * by default sequelize includes createdAt & updatedAt in
     * all queries. Since we are connecting to an existing db,
     * without these fields, we configure sequelize to ignore
     * these fields
     */
    define: {
        timestamps: false
    }
});
// 2. connect & authenticate
sql.authenticate()
    .then(function () {
    // success
    console.log("connected successfully");
})
    .catch(function (err) {
    console.log("error connecting to db" + err);
    return;
});
// 3. define tables
var entry = sql.define("entry", {
    id: { type: sequelize.INTEGER, primaryKey: true },
    title: { type: sequelize.STRING },
    subtitle: { type: sequelize.STRING },
    slug: { type: sequelize.STRING },
    url: { type: sequelize.STRING },
    tags: { type: sequelize.STRING },
    excerpt: { type: sequelize.STRING },
    content_md: { type: sequelize.STRING },
    publish_at: { type: sequelize.STRING },
    is_post: { type: sequelize.STRING },
    site_id: { type: sequelize.INTEGER }
}, {
    tableName: "entry"
});
// 4. query & process 
entry.findAll()
    .then(function (entries) {
    entries.forEach(function (anEntry) {
        // log what we are doing			
        console.log("Writing: " + anEntry["title"]);
        // set the output directory; out has to exists
        var fileName = "out/" + anEntry["slug"] + ".md";
        // create file content
        var fileContent = "Tiltle: " + anEntry["title"] + os.EOL;
        fileContent += "Subtitle: " + anEntry["subtitle"] + os.EOL;
        fileContent += "---" + os.EOL;
        fileContent += anEntry["content_md"];
        // ignoring the callback for this sample
        fs.writeFile(fileName, fileContent);
    });
});
