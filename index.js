const TEAM_DEC = document.getElementById("teamDecrement");
const TEAM_INC = document.getElementById("teamIncrement");
const GROUPS = document.getElementById("groups");
let teamCounter = 0;

TEAM_INC.addEventListener("click", () => {
  const NEW_CARD = document.createElement("div");
  const CURRENT_CARDS_INC = document.getElementsByClassName("teamCard");
  NEW_CARD.classList.add("teamCard");
  GROUPS.appendChild(NEW_CARD);
  const NEW_TITLE = document.createElement("h2");
  NEW_TITLE.classList.add("cardTitle");
  NEW_TITLE.innerText = "Team " + CURRENT_CARDS_INC.length.toString();
  NEW_CARD.appendChild(NEW_TITLE);
  const NEW_CARD_BODY = document.createElement("div");
  NEW_CARD_BODY.classList.add("cardBody");
  NEW_CARD.appendChild(NEW_CARD_BODY);
  if (teamCounter == 0) {
    TEAM_DEC.classList.remove("greyOut");
    TEAM_DEC.classList.add("blueButton");
  }
  teamCounter++;
  document.getElementById("teamNoSpan").innerText = teamCounter.toString();
});

TEAM_DEC.addEventListener("click", () => {
  if (teamCounter == 0) {
    alert("You need at least one team.");
  } else {
    const CURRENT_CARDS_DEC = document.getElementsByClassName("teamCard");
    CURRENT_CARDS_DEC[CURRENT_CARDS_DEC.length - 1].remove();
    teamCounter--;
    document.getElementById("teamNoSpan").innerText = teamCounter.toString();
    if (teamCounter == 0) {
      TEAM_DEC.classList.remove("blueButton");
      TEAM_DEC.classList.add("greyOut");
    }
  }
});

const ADD_MEMBER = document.getElementById("memberAddButton");
const MEMBERS_DISPLAY = document.getElementById("membersDisplay");

ADD_MEMBER.addEventListener("click", () => {
  let MEMBER_INPUT = document.getElementById("memberAddInput").value;
  if (document.getElementById("memberAddInput").value === "") {
    alert("Please enter a name.");
  } else {
    const NEW_MEMBER = document.createElement("p");
    NEW_MEMBER.innerText = MEMBER_INPUT;
    NEW_MEMBER.classList.add("membersDisplayName");
    document.getElementById("memberAddInput").value = "";
    MEMBERS_DISPLAY.appendChild(NEW_MEMBER);
    const NEW_LINE = document.createElement("hr");
    MEMBERS_DISPLAY.appendChild(NEW_LINE);
  }
});

const RESET = document.getElementById("reset");

RESET.addEventListener("click", () => {
  location.reload();
});

const ASSIGN = document.getElementById("assign");

function decimalTest(n) {
  let result = n - Math.floor(n) !== 0;
  return result;
}

ASSIGN.addEventListener("click", () => {
  const CURRENT_MEMBERS = document.getElementsByClassName("membersDisplayName");
  const ALL_CARDS = document.getElementsByClassName("cardBody");
  let teamsNumber = parseInt(
    document.getElementById("teamNoSpan").innerText,
    10
  );
  if (teamsNumber > CURRENT_MEMBERS.length) {
    alert("You have more teams than people!");
  } else {
    let eachTeam = CURRENT_MEMBERS.length / teamsNumber;
    if (decimalTest(eachTeam)) {
      eachTeam = Math.floor(eachTeam);
      let roundChecker = 0;
      let roundCounter = 1;
      for (let i = 0; i < teamsNumber; i++) {
        for (let v = roundChecker; v < eachTeam * roundCounter; v++) {
          const NEW_NAME = document.createElement("p");
          NEW_NAME.classList.add("groupName");
          NEW_NAME.innerText = CURRENT_MEMBERS[v].innerText;
          ALL_CARDS[i].appendChild(NEW_NAME);
          const NEW_LINE_C = document.createElement("hr");
          ALL_CARDS[i].appendChild(NEW_LINE_C);
        }
        roundChecker += eachTeam;
        roundCounter++;
      }
      const NEW_NAME = document.createElement("p");
      NEW_NAME.classList.add("groupName");
      NEW_NAME.innerText = CURRENT_MEMBERS[CURRENT_MEMBERS.length-1].innerText;
      ALL_CARDS[ALL_CARDS.length-1].appendChild(NEW_NAME);
      const NEW_LINE_C = document.createElement("hr");
      ALL_CARDS[ALL_CARDS.length-1].appendChild(NEW_LINE_C);
    } else {
      let roundChecker = 0;
      let roundCounter = 1;
      for (let i = 0; i < teamsNumber; i++) {
        for (let v = roundChecker; v < eachTeam * roundCounter; v++) {
          const NEW_NAME = document.createElement("p");
          NEW_NAME.classList.add("groupName");
          NEW_NAME.innerText = CURRENT_MEMBERS[v].innerText;
          ALL_CARDS[i].appendChild(NEW_NAME);
          const NEW_LINE_C = document.createElement("hr");
          ALL_CARDS[i].appendChild(NEW_LINE_C);
        }
        roundChecker += eachTeam;
        roundCounter++;
      }
    }
  }
});
