import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: [10, "Blog must contain at least 10 characters"],
        maxLength: [40, "Blog must contain at most 40 characters"],
    },
    mainImage: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    intro: {
        type: String,
        required: true,
        minLength: [250, "Blog intro must contain at least 10 characters"],
    },


    paraOneImage: {
        type: String,
        required: true,
    },

    paraOneDescrition: {
        type: String,
        required: true,
        minLength: [250, "Blog intro must contain at least 10 characters"],
    },

    paraOneTitle: {
        type: String,
        required: true,
        minLength: [50, "Blog must contain at least 50 characters"],
    },

    paraTwoImage: {
        type: String,
        required: true,
    },

    paraTwoDescrition: {
        type: String,
        required: true,
        minLength: [250, "Blog intro must contain at least 10 characters"],
    },

    paraTwoTitle: {
        type: String,
        required: true,
        minLength: [50, "Blog must contain at least 50 characters"],
    },


    paraThreeImage: {
        type: String,
        required: true,
    },

    paraThreeDescrition: {
        type: String,
        required: true,
        minLength: [250, "Blog intro must contain at least 10 characters"],
    },

    paraThreeTitle: {
        type: String,
        required: true,
        minLength: [50, "Blog must contain at least 50 characters"],
    },

    category: {
        type: String,
        required: true,
    },

    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
    },

    auhterAvatar: {
        type: String,
        required: true,
    },

});

export const Blog = mongoose.model("Blog", blogSchema);