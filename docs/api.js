export async function loadLocalSnapshot() {

    const response = await fetch("./data/snapshots/latest.json");

    if (!response.ok) {
        throw new Error("Unable to load snapshot.");
    }

    return response.json();

}

const COMLINK_URL = "https://free-comlink.onrender.com";


async function comlinkPost(endpoint, payload) {

    const response = await fetch(
        COMLINK_URL + endpoint,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                enums: false,
                payload
            })
        }
    );


    if (!response.ok) {

        throw new Error(
            `Comlink error: ${response.status}`
        );

    }


    return response.json();

}


export async function testComlink() {

    return comlinkPost("/player", {

        allyCode: "743985967",

        playerId: ""

    });

}