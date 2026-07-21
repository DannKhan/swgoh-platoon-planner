import { getPlayerByAllyCode } from "../providers/comlink/player.js";
import { getGuild } from "../providers/comlink/guild.js";

export async function buildGuildSnapshot(allyCode) {
    const player = await getPlayerByAllyCode(allyCode);
    const guildResponse = await getGuild(player.guildId);

    const snapshot = {
        snapshotTime: new Date().toISOString(),
        source: "Comlink",
        guild: guildResponse.guild,
        players: []
};

return snapshot;
}