document.getElementById('loginBtn').onclick = logBtn;

function logBtn() {
    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    localStorage.setItem('username', user);
    localStorage.setItem('password', pass); 

    document.querySelector('.form-output').innerHTML = user + ':' + pass;
}