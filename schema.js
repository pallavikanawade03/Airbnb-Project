const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.alternatives().try(
            Joi.string().allow(""), // Allow empty string for URLs
            Joi.object({ 
                url: Joi.string().allow(""), // Allow empty URL 
                filename: Joi.string().allow("") // Allow empty filename 
            }).default({ url: "", filename: "" }) // Default empty object to prevent errors
        ).optional() // Make image optional
    }).required(),
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required()
});
