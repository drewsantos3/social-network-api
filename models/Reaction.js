const { Schema, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const reactionSchema = new Schema(
  { 
    reactionId: { type: Schema.Types.ObjectId, default: new Types.ObjectId() },
    reactionBody: { type: String, required: true, maxLength: 280 },
    username: [{ type: String, required: true }],
    createdAt: [{ type: Date, default: Date.now, get: (timestamp) => dateFormat(timestamp) }],
  },
  {
    // use getters and virtuals when data is requested
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;