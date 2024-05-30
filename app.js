let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset")
let newGameBtn = document.querySelector(".new_btn")
let winMsg = document.querySelector(".win_msg")
let drawMsg = document.querySelector(".draw_msg")
let msgContainer = document.querySelector(".msg_container")

// player X , player O

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Button was Clicked")
    if (turnO) {
      box.innerText = "O"
      turnO = false
    } else {
      box.innerText = "X"
      turnO = true
    }
    box.disabled = true;
    checkWinner()
  })

});

const showResult = (result) => {
  msgContainer.style.display = "block";
  if (result === "win") {
    winMsg.style.display = "block";
    drawMsg.style.display = "none"
  } else if (result === "draw") {
    winMsg.style.display = "none"
    drawMsg.style.display = "block"
  }
}

const hideResult = () => {
  msgContainer.style.display = "none";
  winMsg.style.display = "none"
  drawMsg.style.display = "none"
}

const disableAllBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  })
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText
    let pos2 = boxes[pattern[1]].innerText
    let pos3 = boxes[pattern[2]].innerText

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("You have Won!", pos1)
        showResult("win");
        disableAllBoxes();
        return;
      }
    }
  }
  if (Array.from(boxes).every((box) => box.innerText !== "")) {
    console.log("Match Have Drawn!")
    showResult("draw")
  }
}

const resetgame = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false
  });
  turnO = true;
  hideResult();
}

resetBtn.addEventListener("click", resetgame);
newGameBtn.addEventListener("click", resetgame);
hideResult();
