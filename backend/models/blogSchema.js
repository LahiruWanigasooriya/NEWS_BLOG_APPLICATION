import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: [10, "Blog must contain at least 10 characters"],
        maxLength: [40, "Blog must contain at most 40 characters"],
    },
    mainImage: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    intro: {
        type: String,
        required: true,
        minLength: [250, "Blog intro must contain at least 250 characters"],
    },


    paraOneImage: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        },
    },
    paraOneDescrition: {
        type: String,
        minLength: [250, "Blog intro must contain at least 10 characters"],
    },

    paraOneTitle: {
        type: String,
        minLength: [50, "Blog must contain at least 50 characters"],
    },

    paraTwoImage: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        },
    },
    paraTwoDescrition: {
        type: String,
        minLength: [250, "Blog intro must contain at least 10 characters"],
    },

    paraTwoTitle: {
        type: String,
        minLength: [50, "Blog must contain at least 50 characters"],
    },


    paraThreeImage: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        },
    },

    paraThreeDescrition: {
        type: String,
        minLength: [250, "Blog intro must contain at least 10 characters"],
    },

    paraThreeTitle: {
        type: String,
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

    authorName: {
        type: String,
        required: true,
    },

    authorAvatar: {
        type: String,
        required: true,
    },

    published: {
        type: Boolean,
        default: false,
      },
});

export const Blog = mongoose.model("Blog", blogSchema);