export async function loadLocalSnapshot() {

    const response = await fetch("./data/snapshots/latest.json");

    if (!response.ok) {
        throw new Error("Unable to load snapshot.");
    }

    return response.json();

}