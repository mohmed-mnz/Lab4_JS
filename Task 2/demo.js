let students = [];

function addStudent() {
  let name = document.getElementById("name-input").value;
  let age = document.getElementById("age-input").value;

  if (name === "" || name.split(" ").length < 3) {
    alert("Invalid name input");
    return;
  }
  age = parseInt(age);
  if (age <= 18) {
    alert("Age must be greater than 18");
    return;
  }

  let newId = 1;
  if (students.length > 0) {
    let lastId = students[students.length - 1].id;
    newId = lastId + 1;
  }

  let newStudent = {
    id: newId,
    name: name,
    age: age
  };
  students.push(newStudent);

  let tableBody = document.getElementById("student-table");
  let newRow = tableBody.insertRow();
  let idCell = newRow.insertCell();
  let nameCell = newRow.insertCell();
  let ageCell = newRow.insertCell();
  idCell.innerText = newId;
  nameCell.innerText = name;
  ageCell.innerText = age;

  document.getElementById("name-input").value = "";
  document.getElementById("age-input").value = "";
}