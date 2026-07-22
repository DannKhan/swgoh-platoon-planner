import { loadLocalSnapshot } from "./api.js";
import { renderSnapshot } from "./render.js";
import { testComlink } from "./api.js";

async function initialize() {

    try {

        const player = await testComlink();

        console.log(player);

    }

    catch (error) {

        console.error(error);

        document.getElementById("status").textContent =
            "Failed to load snapshot.";

    }

}

document
    .getElementById("searchButton")
    .addEventListener("click", () => {

        const type =
            document.getElementById("searchType").value;

        const value =
            document.getElementById("searchValue").value.trim();

        if (!value) {

            alert("Please enter a value.");

            return;

        }

        console.log(type, value);

        document.getElementById("status").textContent =
            "Search will be implemented in the next step.";

    });

initialize();