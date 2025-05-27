import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        picture: v.string()
    },
    handler: async (ctx, args) => {
        const user = await ctx.db.query("users").filter(q => q.eq(q.field("email"), args.email)).collect();
        if (user?.length === 0) {
            return await ctx.db.insert("users", {
                name: args.name,
                email: args.email,
                picture: args.picture
            })
        }
        return user[0];
    }
})