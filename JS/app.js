//Omar Ayman Page 1
function changeS24Ultra() {
    document.getElementById('s24UltraImageMain').src = "../Images/s24UlrraDiffPrespective.jpg";
}
function showPriceMainS24Ultra() {
    document.getElementById('viewPriceS24Ultra').style.display = 'none';
    document.getElementById('s24UltraPriceMain').style.display = 'block';
}
//Omar Ayman Page 2
function changeToBlack(){
    document.getElementById('s24UltraImage').src = '../Images/Samsung-Galaxy-S24-Ultra-5G._TitaniumBlack.jpg';
    document.getElementById('s24Color').value = 'Titanium Black';
}
function changeToGray(){
    document.getElementById('s24UltraImage').src = '../Images/Samsung-Galaxy-S24-Ultra-5G._TitaniumGray.jpg';
    document.getElementById('s24Color').value = 'Titanium Gray';
}
function changeToViolet(){
    document.getElementById('s24UltraImage').src = '../Images/Samsung-Galaxy-S24-Ultra-5G._TitaniumViolet.jpg';
    document.getElementById('s24Color').value = 'Titanium Violet';
}
function changePriceLowSpecs(){
    document.getElementById('s24UltraPrices').innerHTML = 'L.E 66000';
    document.getElementById('s24UltraPrice').value = 'L.E 66000';
}
function changePriceHighSpecs(){
    document.getElementById('s24UltraPrices').innerHTML = 'L.E 73000';
    document.getElementById('s24UltraPrice').value = 'L.E 73000';
}
function validateForm() {
    var selectColor = document.getElementById('s24Color');
    var selectSpecs = document.getElementById('s24UltraPrice');
    if(!selectColor.value)
    {
        alert('Please select a color from the list above!');
        return false;
    }
    if(!selectSpecs.value)
    {
        alert('Please select RAM and storage from the list above!');
        return false;
    }
    return true;
}

//Karim Mohammad
var not1, not2, not3;

function myFunction1() {
    if (confirm("Are you sure you want to buy this phone?")) {
        not1 = "Not available";
    } else {
        not1 = "Keep looking and you may find a phone you like";
    }
    document.getElementById("alert_not1").innerHTML = not1;
}

function myFunction2() {
    if (confirm("Are you sure you want to buy this phone?")) {
        not2 = "Not available";
    } else {
        not2 = "Keep looking and you may find a phone you like";
    }
    document.getElementById("alert_not2").innerHTML = not2;
}

function myFunction3() {
    if (confirm("Are you sure you want to buy this phone?")) {
        not3 = "Not available";
    } else {
        not3 = "Keep looking and you may find a phone you like";
    }
    document.getElementById("alert_not3").innerHTML = not3;
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
function validateFormKarim() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  // Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", "Smith");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }

//Kerolos
function Buy_Alert() 
{
    var Buy_confirm ;
    if (confirm("are you sure you want to buy this Phone ?"))
    {
        Buy_confirm = "You have bought this Phone !";
    }
    else
    {
        Buy_confirm = "Keep looking and you may find a Phone that suits you better"
    }
    document.getElementById("buy_confirm").innerHTML = Buy_confirm;
}

function Comment_alert()
{
    alert("Thank you for your Comment, have a nice day!")
}

// Omar Gaber
const button = document.querySelector('button');
button.addEventListener('mouseover', function() {
    button.style.backgroundColor = 'blue';
});
button.addEventListener('mouseout', function() {
    button.style.backgroundColor = '';
});