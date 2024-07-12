'use strict';

/**
 * titanic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::titanic.titanic');
