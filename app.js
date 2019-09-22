
var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");