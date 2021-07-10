// let inputs = document.querySelectorAll('input');

// loginBtn.onclick = function() {
//    paragraph.textContent = inputs.value;
// }


// let inputs = document.querySelector('input');
// console.log(inputs.value);

// output.textContent = inputs.value;


// let inputs = document.getElementsByTagName('input');

// best
// document.querySelector('button').onclick = logBtn;

// function logBtn() {
//     let inputs = document.querySelectorAll('input').value;
//     document.querySelector('.form-output').innerHTML = inputs;
// }



// loginBtn.onClick = function() {
//     let inputs = document.querySelector('input');
//     document.querySelector('.paragraph').innerHTML = inputs;
// }

document.getElementById('loginBtn').onclick = logBtn;
function logBtn() {
    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    localStorage.setItem('username', user);
    localStorage.setItem('password', pass); 

    document.querySelector('.form-output').innerHTML = user + ':' + pass;
}