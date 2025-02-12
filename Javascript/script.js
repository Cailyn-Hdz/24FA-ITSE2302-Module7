//1. constant
const fullName = document.getElementById("fname"); // text input
const email = document.getElementById("email"); // text input
const shirtRed = document.getElementById("Red"); // radio input
const shirtYellow = document.getElementById("Yellow"); // radio inputs
const shirtGreen = document.getElementById("Green"); // radio inputs
const shirtBlue = document.getElementById("Blue"); // radio inputs
const shirtPurple = document.getElementById("Purple"); // radio inputs
const shirtPink = document.getElementById("Pink"); // radio inputs
const shirtWhite = document.getElementById("White"); // radio inputs
const shirtBlack = document.getElementById("Black"); // radio inputs
const shirtBrown = document.getElementById("Brown"); // radio inputs
const shirtGray = document.getElementById("Gray"); // radio inputs
const shirtOrange = document.getElementById("Orange"); // radio inputs
const shirtMaterial = document.querySelectorAll("option"); // shirts options
const form = document.getElementById("form");

function formHandler(e) {
  e.preventDefault();
//2. if and else
  if (!validation(fullName.value)) {
    fullName.focus();
    return;
  } else if (!validation(email.value)) {
    email.focus();
    return;
  }
  recieptCalc();
}

//3. event listener
form.addEventListener("submit", formHandler);


//validation of the form
function validation(str) {
  // console.log(str);
  if (str == "" || !str) {
    //alert method to guide the user when submitting incorrect input
    alert("Please Enter Proper Data.");
//4. Boolean
    return false;
  }


  return true;
}

//5. Let
function recieptCalc() {
  let total = 0;


  // Get the selected shirt color
  let shirtColor = "";
//6. Loops
  const shirtColors = [shirtRed, shirtYellow, shirtGreen, shirtBlue, shirtPurple, shirtPink, shirtWhite, shirtBlack, shirtBrown, shirtGray];
  for (let color of shirtColors) {
    if (color.checked) {
      shirtColor = color.value;
      break;
    }
  }


  // Material selected
  let material = "";
  let materialPrice = 0;
//7. Arithmetic Operators
//8. Array
  for (let i = 0; i < shirtMaterial.length; i++) {
    if (shirtMaterial[i].selected && shirtMaterial[i].value !== "0") {
      material = shirtMaterial[i].textContent;
      materialPrice = parseInt(shirtMaterial[i].value);
      break;
    }
  }


  // Application method selected
  let appMethods = [];
  const appOptions = document.querySelectorAll('input[type="checkbox"]:checked');
  let appPrice = 0;
  appOptions.forEach(option => {
    appMethods.push(option.parentElement.textContent.trim());
    appPrice += parseInt(option.value);
  });


  // Calculate total price
  total = materialPrice + appPrice;


  // Display the receipt (without strong or span)
  document.getElementById("FullName").textContent = "Name: " + fullName.value;
  document.getElementById("EmailAddress").textContent = "Email: " + email.value;
  document.getElementById("TShirtColor").textContent = "Color: " + shirtColor;
  document.getElementById("MaterialType").textContent = "Material Payment: " + material;// + " ($" + materialPrice + ")";
  document.getElementById("AppType").textContent = "Application Payment: " + (appMethods.length > 0 ? appMethods.join(", ") : "None");
  document.getElementById("TotalPrice").textContent = "Total: $" + total;


  // Show the receipt section
  document.getElementById("orderReceipt").style.display = "block";
}
