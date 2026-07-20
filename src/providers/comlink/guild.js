import { post } from "./client.js";

export async function getGuild(guildId) {
    return post("/guild", {
        guildId,
        includeRecentGuildActivityInfo: true
    });
}
