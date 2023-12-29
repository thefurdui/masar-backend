'use strict';

/**
 * navigator service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::navigator.navigator');
