function validateForm() {

    var user = document.getElementById('user').value;

    if (user == "") {
        document.getElementById('name_error').innerHTML = " please fill up your name";
        return false;
    }
}