'use strict';

/**
 * car controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::car.car', ({ strapi }) => ({
    async create(ctx) {
        let { data } = ctx.request.body;
        data["owner"] = ctx.state.user.id;
        ctx.request.body = { data };
        return await super.create(ctx);
    },
}));
