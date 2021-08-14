// Navigation Bar
function closeNav() {
  document.getElementById('nav').style.height = '0';
}

function openNav() {
  document.getElementById('nav').style.height = '100%';
}


// watches Animation
function reduceSize_1() {
  document.getElementById('items1').classList.add('back');
  document.getElementById('watch1').style.display = 'block';
  document.getElementById('watch2').style.display = 'block';
  document.getElementById('watch3').className = 'col-md-4';
}

function backToOriginal_1() {
  document.getElementById('items1').classList.remove('back');
  document.getElementById('watch1').style.display = 'none';
  document.getElementById('watch2').style.display = 'none';
  document.getElementById('watch3').className = 'col-md-12';
}

function reduceSize_2() {
  document.getElementById('items2').classList.add('back2');
  document.getElementById('watch6').style.display = 'block';
  document.getElementById('watch5').style.display = 'block';
  document.getElementById('watch4').className = 'col-md-4';
}


// Login and signup
function backToOriginal_2() {
  document.getElementById('items2').classList.remove('back2');
  document.getElementById('watch6').style.display = 'none';
  document.getElementById('watch5').style.display = 'none';
  document.getElementById('watch4').className = 'col-md-12';
}

function Log_to_sign() {
  var text = document.getElementById('Sign')
  if (text.innerHTML == ' Sign Up') {
    document.getElementById('log_txt').innerHTML = 'Sign Up';
    document.getElementById('log_q').innerHTML = 'Already Have an account?';
    document.getElementById('Sign').innerHTML = ' Log In';
    document.getElementById('login_btn').value = 'SIGN UP';
  } else if (text.innerHTML == ' Log In') {
    document.getElementById('log_txt').innerHTML = 'Log In';
    document.getElementById('log_q').innerHTML = 'Not Registered yet?';
    document.getElementById('Sign').innerHTML = ' Sign Up';
    document.getElementById('login_btn').value = 'LOG IN';
  }
}

// Agents Show And Hide
function Show(x) {
  if (x == 1) {
    document.getElementById('NAMES1').style.display = 'block';
  } else if (x == 2) {
    document.getElementById('NAMES2').style.display = 'block';
  } else if (x == 3) {
    document.getElementById('NAMES3').style.display = 'block';
  }
}

function Hide(x) {
  if (x == 1) {
    document.getElementById('NAMES1').style.display = 'none';
  } else if (x == 2) {
    document.getElementById('NAMES2').style.display = 'none';
  } else if (x == 3) {
    document.getElementById('NAMES3').style.display = 'none';
  }
}

// Modal Show and Hide
var modal = document.getElementById('modal');
var close = document.getElementsByClassName('cancel')[0];

function show_modal() {
  modal.style.display = 'block';
}

close.onclick = function() {
  modal.style.display = 'none';
}

// Modal
function change_txt(num) {
  if (num == 1) {
    document.getElementById('img-change').src = 'images/watch (1).png';
    document.getElementById('Watch_Name').innerHTML = 'THE DATEJUST';
    document.getElementById('Watch_Price').innerHTML = '&euro;13,134';
  } else if (num == 2) {
    document.getElementById('img-change').src = 'images/watch (3).png';
    document.getElementById('Watch_Name').innerHTML = 'SEA-DWELLER';
    document.getElementById('Watch_Price').innerHTML = '&euro;9,250';
  } else if (num == 3) {
    document.getElementById('img-change').src = 'images/watch (2).png';
    document.getElementById('Watch_Name').innerHTML = 'CELLINI';
    document.getElementById('Watch_Price').innerHTML = '&euro;8,500';
  } else if (num == 4) {
    document.getElementById('img-change').src = 'images/watch (4).png';
    document.getElementById('Watch_Name').innerHTML = 'GRIP';
    document.getElementById('Watch_Price').innerHTML = '&euro;1,935';
  } else if (num == 5) {
    document.getElementById('img-change').src = 'images/watch (5).png';
    document.getElementById('Watch_Name').innerHTML = 'G-TIMELESS';
    document.getElementById('Watch_Price').innerHTML = '&euro;2,613';
  } else if (num == 6) {
    document.getElementById('img-change').src = 'images/watch (6).png';
    document.getElementById('Watch_Name').innerHTML = 'DISNEY X GUCCI';
    document.getElementById('Watch_Price').innerHTML = '&euro;1,693';
  }
}

function validateForm() {
  var E = false;
  var P = false;
  let x = document.forms["logIn"]["Email"].value;
  if (x != "dediputi@gmail.com") {
    alert("Please Enter the correct email to continue");
    return false;
  } else {E = true;}
  let y = document.forms["logIn"]["Password"].value;
  if (y != "MMMIBR123456") {
    alert("Please Enter the correct password to continue");
    return false;
  } else {P = true;}
  if (E && P == true) {
    var logIn = document.getElementsByName('logIn')[0];
    var success = document.getElementById('success');
    logIn.style.display = 'none';
    success.style.display = 'block';
  }
}