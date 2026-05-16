
let allUsers = JSON.parse(localStorage.getItem('userDB')) || []

let password = document.getElementById('password')
let email = document.getElementById('email')

// console.log(allUsers);


function sweet(...rest) {
    // console.log(rest[0]);

    Swal.fire({
        icon: rest[0],
        title: rest[1],
        text: rest[2],
        footer: rest[3]
    });
}

function loginHandler(e) {

    e.preventDefault()
    // console.log('ok');

    for (var i = 0; i < allUsers.length; i++) {


        // console.log(allUsers[i].email , allUsers[i].password);

        if (allUsers[i].email == email.value.trim() &&
            allUsers[i].password == password.value.trim()) {
                
                return sweet('success', 'Sign Up', 'Congratulations! signup successfully!',
                    '<a href=\"#\">Why do I have this issue?</a>')
                    
        }
        else {
            return sweet('error', 'Oops', 'Email and Password is Not Found ',
                '<a href=\"#\">Why do I have this issue?</a>')

        }
    }


}