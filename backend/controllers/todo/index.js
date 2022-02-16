const get = require('./get');
const post = require('./post');
const drop = require('./drop');
const patch = require('./patch');

const controller = {};

controller.get = get;
controller.post = post;
controller.drop = drop;
controller.patch = patch;

module.exports = controller;