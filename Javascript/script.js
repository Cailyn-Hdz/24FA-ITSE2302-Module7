// Creates event lister for the form
// 1. Event lister
document.getElementById("form").addEventListener("submit", handleFormSubmit)
console.log(document.getElementById("form"))
// 2. const
  const nameInput = document.getElementById("fname");
  const emailInput = document.getElementById("email");
  const designImage = document.getElementById("img");

// Function 1 calls for function 2 and 3 and displays all the inputed values
function handleFormSubmit(event) {
  event.preventDefault();
  console.log(validateForm())

  // Calls validation function
  if (validateForm()) {
    const totalAmount = calculateTotal();

    // Display all values to the console
    console.log("Full Name: " + document.getElementById("fname").value);
    console.log("Email Address: " + document.getElementById("email").value);

    // If none of the radio buttons are clicked nothing will be displayed
    if (document.getElementById("Red").checked) {
      console.log("T-Shirt Color: "+ document.getElementById("Red").value);
    }

    if (document.getElementById("Orange").checked) {
      console.log("T-Shirt Color: "+ document.getElementById("Orange").value);
    }

    if (document.getElementById("Yellow").checked) {
      console.log("T-Shirt Color: "+ document.getElementById("Yellow").value);
    }

    if (document.getElementById("Green").checked) {
      console.log("T-Shirt Color: "+ document.getElementById("Green").value);
    }

    if (document.getElementById("Blue").checked) {
      console.log("T-Shirt Color: "+ document.getElementById("Blue").value);
    }

    if (document.getElementById("Purple").checked) {
      console.log("T-Shirt Color: "+ document.getElementById("Purple").value);
    }

    if (document.getElementById("Pink").checked) {
      console.log("T-Shirt Color: "+ document.getElementById("Pink").value);
    }

    if (document.getElementById("White").checked) {
      console.log("T-Shirt Color: "+ document.getElementById("White").value);
    }

    if (document.getElementById("Black").checked) {
      console.log("T-Shirt Color: "+ document.getElementById("Black").value);
    }

    if (document.getElementById("Brown").checked) {
      console.log("T-Shirt Color: "+ document.getElementById("Brown").value);
    }

    if (document.getElementById("Gray").checked) {
      console.log("T-Shirt Color: "+ document.getElementById("Gray").value);
    }
    console.log("Material type: " + document.getElementById("material").value);
    console.log("Checked Items Total: $" + totalAmount);
    console.log("Message: " + document.getElementById("messagebox").value);
    
 }
}
  

// Function 2 validates every field
function validateForm() {

// 3. String Methods (trim)
  const email = emailInput.value.trim();

//4. Boolean
  // Checks if the full name is empty
  if (nameInput.value.trim() == "") {
    alert("You must input your full name");
    nameInput.focus();
    return false;
  }

  // Checks if the email address is empty
  if (emailInput.value.trim() == "") {
    alert("You must input an email");
    emailInput.focus();
    return false;
  }

  // Checks if email address is valid
  if (!emailInput || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert("Email is not valid, please re-enter");
    emailInput.focus();
    return false;
  }

  return true;
}

// Function 3 calculating the total cost of the items purchased by the user
function calculateTotal() {
// 5. Var
  var total = 0;

  // Check if Vinyl checkbox is selected
  if (document.getElementById("Vinyl").checked) {
    total += parseInt(document.getElementById("Vinyl").value);
  }

  // Check if Embrodiery checkbox is selected
  if (document.getElementById("Embrodiery").checked) {
  total += parseInt(document.getElementById("Embrodiery").value);
  }

  // Check if Screen checkbox is selected
  if (document.getElementById("Screen").checked) {
  total += parseInt(document.getElementById("Screen").value);
  }

  // Returns the total amount for all items selected
  return total;
}

// Function 4 displays receipt total for the order
var button = document.getElementById("submit");

function fun1() {
  // Get the input elements
  const nameInput = document.getElementById("fname");
  const emailInput = document.getElementById("email");
  const colorOptions = document.getElementsByName("color");
  const materialSelect = document.getElementsByName("material");
  const appOptions = document.getElementsByName("app");

  // Display name and email
  document.getElementById("FullName").innerHTML = nameInput.value;
  document.getElementById("EmailAddress").innerHTML = emailInput.value;

  // Get selected color
// 6. Let
  let colorInput = "";
// 7. Arithmetic Operators
// 8. Loop
  for (let i = 0; i < colorOptions.length; i++) {
    if (colorOptions[i].checked) {
      colorInput = colorOptions[i].value;
      break;
    }
  }
  document.getElementById("TShirtColor").innerHTML = colorInput;

  // Get selected material from dropdown
  const materialInput = materialSelect.value;
  document.getElementById("MaterialType").innerHTML = materialInput;

  // Get selected application
  let appInput = "";
  for (let i = 0; i < appOptions.length; i++) {
    if (appOptions[i].checked) {
      appInput += appOptions[i].value + ", ";
    }
  }
  appInput = appInput ? appInput.slice(0, -2) : "No application type selected.";
  document.getElementById("AppType").innerHTML = appInput;
}

button.addEventListener("click", fun1);

