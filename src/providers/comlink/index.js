import { getPlayerByAllyCode } from "./player.js";

const allyCode = "743985967";

const player = await getPlayerByAllyCode(allyCode);

console.log(player.guildId);
