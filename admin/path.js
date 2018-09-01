#!/usr/bin/env node

var fs = require('fs'),
        path = require('path');

['mysql'].forEach(function (engine) {
    var fpath = path.join(__dirname, './config/', engine, '/custom.json');

    var data = fs.readFileSync(fpath, 'utf8');
    fs.writeFileSync(fpath,
            data.replace(/\/Users\/belhyun\/Documents\/workspace\/fund\/admin/g, __dirname)
    );
});