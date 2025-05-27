import { v } from "convex/values";

const { defineSchema, defineTable } = require("convex/server");

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        picture: v.string(),
        subscriptionId: v.optional(v.string())
    })
})