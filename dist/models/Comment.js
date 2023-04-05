"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    commentLikes: {
        type: Number,
        default: 0,
    },
    text: {
        type: String,
        required: true,
    },
});
exports.default = (0, mongoose_1.model)("Comment", commentSchema);
