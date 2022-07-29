const TEAM_DEC = document.getElementById("teamDecrement")
const TEAM_INC = document.getElementById("teamIncrement")
const GROUPS = document.getElementById("groups")

TEAM_INC.addEventListener("click", () => {
    const NEW_CARD = document.createElement("div");
    const CURRENT_CARDS_INC = document.getElementsByClassName("teamCard");
    NEW_CARD.classList.add("teamCard");
    GROUPS.appendChild(NEW_CARD);
    const NEW_TITLE = document.createElement("h2");
    NEW_TITLE.classList.add("cardTitle");
    NEW_TITLE.innerText = "Team " + (CURRENT_CARDS_INC.length).toString();
    NEW_CARD.appendChild(NEW_TITLE);
    const NEW_CARD_BODY = document.createElement("div");
    NEW_CARD_BODY.classList.add("cardBody");
    NEW_CARD.appendChild(NEW_CARD_BODY);
})

TEAM_DEC.addEventListener("click", () => {
    const CURRENT_CARDS_DEC = document.getElementsByClassName("teamCard");
    CURRENT_CARDS_DEC[CURRENT_CARDS_DEC.length - 1].remove();
})