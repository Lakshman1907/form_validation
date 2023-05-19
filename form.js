function nameCheck() {
  const fname = document.getElementById("fname");
  var text2 = document.getElementById("nameo");
  if (fname.value.search(/^[A-Za-z]+$/) < 0) {
    text2.innerHTML = "Please enter valid name";
    text2.style.color = "#ff0000";
    hasError = true;
  }
  if (fname.value == "") {
    text2.innerHTML = "*Please enter your name*";
    text2.style.color = "#ff0000";
    hasError = true;
  } else {
    text2.innerHTML = "";
    text2.style.color = "#ffff";
  }
}

fname.addEventListener("blur", (e) => {
  nameCheck();
});
//password validation
// password.addEventListener("blur", (e) => {
//   passCheck();
// });

function passCheck() {
  var passClass = document.getElementsByClassName("password-check");
  var password = document.getElementById("password");
  var text1 = document.getElementById("text");
  const lowerCase = new RegExp(/^(?=.*[a-z]).*$/);
  const upperCase = new RegExp(/^(?=.*[A-Z]).*$/);
  const number = new RegExp(/[0-9]/);
  const specialSymbol = new RegExp(
    /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/
  );
  const minmaxchar = new RegExp(/^.{8,14}$/);
  //Password validation
  if (password.value == "") {
    text1.innerHTML = "*please enter a password*";
    text1.style.color = "#ff0000";
    hasError = true;
  } else {
    text1.innerHTML = "";
    text1.style.color = "#ffffff";
  }
  if (password.value.match(minmaxchar)) {
    passClass[0].style.color = "green";
  } else {
    passClass[0].style.color = "grey";
  }
  if (password.value.match(number)) {
    passClass[1].style.color = "green";
  } else {
    passClass[1].style.color = "grey";
  }
  if (password.value.match(specialSymbol)) {
    passClass[2].style.color = "green";
  } else {
    passClass[2].style.color = "grey";
  }
  if (password.value.match(lowerCase)) {
    passClass[3].style.color = "green";
  } else {
    passClass[3].style.color = "grey";
  }
  if (password.value.match(upperCase)) {
    passClass[4].style.color = "green";
  } else {
    passClass[4].style.color = "grey";
  }
}

function radiobox() {
  a = 0;
  var gender = document.getElementsByName("gender");
  var error = document.getElementById("error");
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      a = 1;
    }
  }
  if (a == 0) {
    error.innerHTML = "*please fill this first*";
    error.style.color = "red";
    return false;
  } else {
    error.innerHTML = "";
    error.style.color = "#ffff";
  }
}
function checkBox() {
  var hobbie = document.getElementsByName("chkbx");
  var text = document.getElementById("valid");
  var newvar = 0;
  for (i = 0; i < hobbie.length; i++) {
    if (hobbie[i].checked == true) {
      newvar = newvar + 1;
    }
  }
  if (newvar >= 3) {
    text.innerHTML = "*Please select only two*";
    text.style.color = "red";
    return false;
  }
  if (newvar == 0) {
    text.innerHTML = "*Please select any two*";
    text.style.color = "red";
  } else {
    text.innerHTML = "";
    text.style.color = "#ffff";
  }
}
function dobCheck() {
  var birthday = document.getElementsByClassName("b-day")[0];
  birthday = new Date(birthday);
  var text = document.getElementById("Dob");
  var today = new Date();

  var diff_time = (today.getTime() - birthday.getTime()) / 1000;
  diff_time = diff_time / (60 * 60 * 24);
  var diff_years = Math.round(diff_time / 365.25);
  console.log(diff_years);
  console.log(diff_time);

  if(diff_years < 18){
    text.innerHTML = "**you must me 18 years to fill this form";
    text.style.color = "red";
  } else{
    text.innerHTML = "";
    text.style.color = "#fff";
  }if(!birthday.value){
    text.innerHTML = "**please fill this up";
    text.style.color = "red";
  }
  // var nonlsec = 60* 60 * 1000;
  // valDate = new Date(validDate + nonlsec);
  // console.log(valDate);
  // console.log( birthday);
  // console.log( today);
  // console.log(today-birthday)
  // var validDate =today- birthday;
  // console.log( validDate);
  // validDate = new Date(validDate);
  //  var date = validDate.toUTCString();
  // console.log( validDate);
  // console.log(date);

  // // text.innerHTML = "";
  // // text.style.color = "#ffffff";

  // if (birthday == "") {
  //   text.innerHTML = "please fill this up";
  // }
  // if (birthday < valiMinDate) {
  //   text.innerHTML = "";
  //   text.style.color = "red";
  // } else{
  //   text.innerHTML = "**you must me 18 years to fill this form";
  //   text.style.color = "red";
  // }
}

//Email validation
email.addEventListener("blur", (e) => {
  emailCheck();
});
//Email validation code
function emailCheck() {
  var form = document.getElementById("form");
  var hasError = false;
  var email = document.getElementById("email");
  // var textarea = document.getElementById("usrfrm");
  //var text3 = document.getElementsById("area");
  var text = document.getElementById("message");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.match(pattern)) {
    text.innerHTML = "";
    text.style.color = "#ff0000";
  } else {
    text.innerHTML = "*Please Enter valid Email* ";
    text.style.color = "red";
    hasError = true;
  }
  if (email.value == "") {
    text.innerHTML = "*Please Enter your Email* ";
    text.style.color = "#ff0000";
    hasError = true;
  }
  if (hasError) return false;
}
usrfrm.addEventListener("blur", (e) => {
  textCheck();
});
function textCheck() {
  var userform = document.getElementById("usrfrm");
  var hasError = false;
  var comment = document.getElementById("comment");
  const minmaxchar = new RegExp(/^.{20,30}$/);

  if (userform.value.match(minmaxchar)) {
    comment.innerHTML = "";
  } else {
    comment.innerHTML = "*please enter your message with atleast 20 letter*";
    comment.style.color = "red";
    hasError = true;
  }
  if (userform.value == "") {
    comment.innerHTML = "*please enter your message*";
    comment.style.color = "red";
    hasError = true;
  } else {
    comment.innerHTML = "";
    comment.style.color = "#ffff";
  }
  if (hasError) return false;
}

function validation() {
  hasError = true;
  nameCheck();
  emailCheck();
  passCheck();
  textCheck();
  radiobox();
  checkBox();
  dobCheck();
  if (hasError) return false;
}
//Email validation

// if (password.value.length == "") {
//   text1.innerHTML = "**please enter a password";
//   text.style.color = "#ff0000";
//   hasError = true;
// }
// if (password.value.search(/^.{8,14}$/) < 0) {
//   text1.innerHTML = "**Password must be 8-14 Characters Long.";
//   text1.style.color = "#ff0000";
//   hasError = true;
// }
// if (password.value.search(/[0-9]/) < 0) {
//   text1.innerHTML = "Your password must contain at least one digit.";
//   text1.style.color = "#ff0000";
//   hasError = true;
// }
// if (
//   password.value.search(/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/) <
//   0
// ) {
//   text1.innerHTML = "Password must contain at least one Special Symbol.";
//   text1.style.color = "#ff0000";
//   hasError = true;
// }
// if (password.value.search(/^(?=.*[a-z]).*$/) < 0) {
//   text1.innerHTML = "Password must have at least one lowercase Character.";
//   text1.style.color = "#ff0000";
//   hasError = true;
// }
// if (password.value.search(/^(?=.*[A-Z]).*$/) < 0) {
//   text1.innerHTML = "Password must have at least one uppercase Character.";
//   text1.style.color = "#ff0000";
//   hasError = true;
// }
// if (password.value == "") {
//   text1.innerHTML = "*Please enter a password*";
//   text1.style.color = "#ff0000";
//   hasError = true;
// }

//Text area validation

//if (textarea.value == "") {
//  text3.innerHTML = "*Please enter message*";
//  text3.style.color = "black";
//   hasError = true;
// //}
//if(area.value.search(/^.{20,60}$/)< 0){
//   text3.innerHTML = "asdfknjsp";
//   text3.style.color = "#ff0000";
//   hasError= true;
// }

// document.querySelectorAll('input[name="gender"').forEach((el=>{
//   console.log(el.checked);
// }));

//document.querySelectorAll('input[name="chkbx"').forEach((el=>{
//   console.log(el.checked);
//}));
