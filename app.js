global = require(__dirname+"/settings.js");
global.DIR = __dirname;

global.log = function(msg) {
	console.log(msg);
}

var express = require(global.DIR+"/lib/express");
express.start();
