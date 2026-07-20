import { post } from "./client.js";

export async function getPlayerByAllyCode(allyCode) {
    return post("/player", {
        allyCode
    });
}

export async function getPlayerByPlayerId(playerId) {
    return post("/player", {
        playerId
    });
}
