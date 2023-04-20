'use strict';

/**
 * ntf service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ntf.ntf');
