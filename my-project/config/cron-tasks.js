const colors = [
    "red", "green", "blue", 
    "yellow", "black", "white"
];

module.exports = {
    /**
     * Update colors of the cars.
     * Every 1 hour.
     */
    myJob: {
        task: async ({ strapi }) => {
            try {
                const entries = await strapi.entityService.findMany('api::car.car');

                for (const entry of entries) {
                    await strapi.entityService.update('api::car.car', entry.id, {
                        data: {
                            color: colors[Math.floor(Math.random() * colors.length)],
                        }
                    });
                }

                console.log("Successfully updated all the colors of the cars.");
            
            } catch (error) {
                console.log(error);
            }
        },
        options: {
            rule: "0 * * * *",
        },
    },
};