// getting the items


const table = document.getElementById("table");
const nameInput = document.getElementById("name-input");
const marksInput = document.getElementById("marks-input");
const addBtn = document.getElementById("add-btn");

const addStudent = () => {
  const nameValue = nameInput.value;
  const marksValue = marksInput.value;
  // console.log(nameValue + " "+ marksValue);
  const newTR = document.createElement("tr");
  const firstTD = document.createElement("td");
  const secondTD = document.createElement("td");

  table.appendChild(newTR);
  newTR.appendChild(firstTD);
  newTR.appendChild(secondTD);

  firstTD.innerText = nameValue;
  secondTD.innerText = marksValue;

  localStorage.setItem("students", table.innerHTML);
};
table.innerHTML= localStorage.getItem("students");
