
let Email = document.getElementById('email')
let fullName = document.getElementById('fullName')
let userName = document.getElementById('userName')
let password = document.getElementById('password')

let allUsers = JSON.parse(localStorage.getItem('userDB')) || []



function sweet(...rest) {
    // console.log(rest[0]);

    Swal.fire({
        icon: rest[0],
        title: rest[1],
        text: rest[2],
        footer: rest[3]
    });
}





// console.log(Email);
// console.log(fullName);
// console.log(userName);
// console.log(password);

function signupHandler(e) {
    e.preventDefault()

    if (!Email.value.trim() ||
        !fullName.value.trim() ||
        !userName.value.trim() ||
        !password.value.trim()
    ) {

        return sweet('error', 'Oops', 'All Fileds Required ',
            '<a href=\"#\">Why do I have this issue?</a>')
    }

    if (password.value.length < 8) {
        return sweet('error', 'Oops', 'Password 8 Character Required! ',
            '<a href=\"#\">Why do I have this issue?</a>')
    }

    let users = {
        email: Email.value,
        fullName: fullName.value,
        userName: userName.value,
        password: password.value
    }



    // console.log(users);

    for (var i = 0; i < allUsers.length; i++) {

        if (allUsers[i].email == Email.value.trim()) {


            return sweet('error', 'Oops', 'Email is Already Register ',
                '<a href=\"#\">Why do I have this issue?</a>')
        }

    }

    allUsers.push(users)

    localStorage.setItem('userDB',JSON.stringify(allUsers))


    sweet('success', 'Signup', 'Congratulations! signup successfully!')


    setTimeout(() => {
        window.location.href = 'login.html'
    }, 1500)




}