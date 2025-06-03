import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

/**
 * Creates a new design record in the database
 */
export const CreateNewDesign = mutation({
    args: {
        name: v.string(),
        width: v.number(),
        height: v.number(),
        uid: v.id("users")
    },
    handler: async (ctx, args) => {
        return await ctx.db.insert("designs", {
            name: args.name,
            width: args.width,
            height: args.height,
            uid: args.uid,
        });
    }
})

export const GetDesign = query({
    args: {
        id: v.id("designs")
    },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.id);
    }
})

export const GetDesignsList = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("designs").collect();
    }
})