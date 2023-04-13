'use strict';

/**
 * ecosystem controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ecosystem.ecosystem');
