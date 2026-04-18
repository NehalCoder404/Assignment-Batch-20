
let signupEl = document.getElementById('signup')
let form = document.getElementById('form')
let firstName = document.getElementById('firstname')
let lastName = document.getElementById('lastname')
let date = document.getElementById('date')
let month = document.getElementById('month')
let year = document.getElementById('year')
let email = document.getElementById('email')
let password = document.getElementById('password')
let gender = document.getElementsByName('gender')

function sweetArlt(error, title, text) {
    Swal.fire({
        icon: error,
        title: title,
        text: text,
    });
}



function formHandler(event) {
    event.preventDefault()

    // console.log('xyz');

    if (
        firstName.value.trim() == "" ||
        lastName.value.trim() == '' ||
        date.value.trim() == '' ||
        month.value.trim() == '' ||
        year.value.trim() == '' ||
        email.value.trim() == '' ||
        password.value.trim() == ''
    ) {
        return sweetArlt('error', 'Oops...', 'Please Enter all fields')
        // console.log('abc');        
    }

    if (password.value.length < 8) {
        return sweetArlt('error', 'Oops...', 'Password at least 8 character!')
    }



    for (let i = 0; i < gender.length; i++) {

        if (gender[i].checked) {
            console.log(gender[i].value)
        }

    }

    console.log('firstName ==>', firstName.value);
    console.log('lastName ==>', lastName.value);
    console.log('date ==>', date.value);
    console.log('month ==>', month.value);
    console.log('year ==>', year.value);
    console.log('email ==>', email.value);
    console.log('password ==>', password.value);

    sweetArlt('success', 'Signup', 'Congratulations! signup successfully!')


    setTimeout(() => {
        window.location.href = 'dashboard.html'
    }, 1500)
}



signupEl.addEventListener('click', formHandler)