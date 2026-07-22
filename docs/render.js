export function renderSnapshot(snapshot) {

    document.getElementById("guildName").textContent =
        "Guild: " + snapshot.guild.profile.name;

    document.getElementById("guildMembers").textContent =
        "Members: " + snapshot.guild.member.length;

    document.getElementById("snapshotTime").textContent =
        "Updated: " + snapshot.snapshotTime;

    const table = document.getElementById("players");

    table.innerHTML = "";

    snapshot.guild.member.forEach(player => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${player.playerName}</td>
            <td>${player.galacticPower}</td>
            <td>${player.characterGalacticPower}</td>
            <td>${player.shipGalacticPower}</td>
            <td>${new Date(Number(player.lastActivityTime)).toLocaleString()}</td>
        `;

        table.appendChild(row);

    });

}