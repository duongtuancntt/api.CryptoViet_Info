'use strict';

/**
 * cv-ecosystem service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cv-ecosystem.cv-ecosystem');
