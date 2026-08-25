let myOTP;

function sendOTP() {
    let phone = document.getElementById('phone').value;
    if (phone.length === 10) {
        myOTP = Math.floor(1000 + Math.random() * 9000);
        alert("POLY GAMER OTP: " + myOTP);
        
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('otp-section').style.display = 'block';
        document.getElementById('otp-text').innerText = "OTP sent to +91 " + phone;
    } else {
        alert("Invalid Phone Number!");
    }
}

function verifyOTP() {
    let input = document.getElementById('otp-input').value;
    if (input == myOTP) {
        document.getElementById('otp-section').style.display = 'none';
        document.getElementById('name-section').style.display = 'block';
    } else {
        alert("Wrong OTP!");
    }
}

function goToHome() {
    let name = document.getElementById('username').value;
    if (name.trim().length >= 3) {
        // Unique ID Generation (NAME + RANDOM# + LOGO)
        let randomNum = Math.floor(100 + Math.random() * 899);
        let uniqueID = name.toUpperCase() + "#" + randomNum + " 🎮PG";

        // Home Page setup
        document.getElementById('name-section').style.display = 'none';
        document.getElementById('home-page').style.display = 'block';
        
        // Displaying Player Data on Home Page
        document.getElementById('display-name').innerText = name;
        document.getElementById('display-id').innerText = uniqueID;
    } else {
        alert("Please enter a valid name (Min 3 letters)");
    }
      }
