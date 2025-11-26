const boxes = document.querySelectorAll(".box");
const winText = document.getElementById("winner");
resetBtn = document.getElementById("reset-btn");

let turn = "X";

winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
winText.style.opacity = "0";
winText.innerHTML = ``;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn == "X") {
      box.innerHTML = "X";
      turn = "O";
      box.disabled = true;
    } else if (turn == "O") {
      box.innerHTML = "O";
      turn = "X";
      box.disabled = true;
    }
    winner();
  });
});

function winner() {
  for (let condition of winConditions) {
    const box1st = boxes[condition[0]].innerHTML;
    const box2nd = boxes[condition[1]].innerHTML;
    const box3rd = boxes[condition[2]].innerHTML;

    // console.log(box1st);

    if (box1st != "" && box1st === box2nd && box2nd === box3rd) {
      console.log(`${box1st} is winner`);
      winText.style.opacity = "1";
      winText.innerHTML = `🎉 Winner is ${box1st} 🎉`;
      boxes.forEach((box)=>{
        box.disabled=true;

      });
    }
  }

  resetBtn.addEventListener("click", ()=>{
    boxes.forEach((box)=>{
      box.innerHTML="";
      box.disabled= false;
      turn= "X";
      winText.innerHTML="";
    });
  });
}
