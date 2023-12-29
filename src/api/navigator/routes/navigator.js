'use strict';

/**
 * navigator router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::navigator.navigator');
