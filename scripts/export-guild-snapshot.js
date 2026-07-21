import { buildGuildSnapshot } from "../src/snapshot-builder/builder.js";
import { writeFile } from "fs/promises";

const snapshot = await buildGuildSnapshot("743985967");

await writeFile(
    "data/snapshots/latest.json",
    JSON.stringify(snapshot, null, 2),
    "utf-8"
);

console.log("Snapshot saved");
console.log("Guild:", snapshot.guild.profile.name);
console.log("Members:", snapshot.guild.member.length);