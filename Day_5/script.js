function validate() {
    let uname = document.getElementById("un").value;
    let pass= document.getElementById("pass").value;
    if (uname == "admin" && pass == "admin") {
        document.getElementById("res").innerHTML = "Login Success";
    } else {
        document.getElementById("res").innerHTML = "Login Failed";
    }
}   

