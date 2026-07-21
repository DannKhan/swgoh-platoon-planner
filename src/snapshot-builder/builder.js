import { getPlayerByAllyCode } from "../providers/comlink/player.js";
import { getGuild } from "../providers/comlink/guild.js";

export async function buildGuildSnapshot(allyCode) {

    const playerResponse = await getPlayerByAllyCode(allyCode);
    const guildId = playerResponse.guildId;

    const guildResponse = await getGuild(guildId);

    return {
        snapshotTime: new Date().toISOString(),
        source: "Comlink",
        guild: guildResponse.guild,
        players: []
    };
}