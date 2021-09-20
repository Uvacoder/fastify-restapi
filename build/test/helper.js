'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @type {FastifyInstance}
 */
var Fastify = require('fastify');
var fp = require('fastify-plugin');
var App = require('../app');
// Fill in this config with all the configurations
// needed for testing the application
function config() {
    return {};
}
// automatically build and tear down our instance
function build(t) {
    /**
     * @type {FastifyInstance}
     */
    var app = Fastify();
    // fastify-plugin ensures that all decorators
    // are exposed for testing purposes, this is
    // different from the production setup
    app.register(fp(App), config());
    // tear down our app after we are done
    t.teardown(app.close.bind(app));
    return app;
}
var helper = {
    config: config,
    build: build,
};
exports.default = helper;
