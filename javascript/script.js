const nameField = document.getElementById("input-name");
const roleField = document.getElementById("input-role");
const punchButton = document.getElementById("punch-in-button");


punchButton.addEventListener("click", event => {
  if (nameField.value !== "") {
  console.log(nameField.value);
  console.log(roleField.value);
  }else{
    alert("Both fields must be filled in!")
  };
});