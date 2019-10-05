function showLogin() {
    $('#login-page').show()
    $('#content').hide()
    $('#fill-todos').empty()
    $('#fill-projects').empty()
}

function showContent() {
    $('#login-page').hide()
    $('#content').show()
}

function checkLogin() {
    if (localStorage.getItem('token')) {
        showContent()
    } else {
        showLogin()
    }
}

function showLoginForm() {
    $('#register').hide()
    $('#login').show()
    $('#tab-login').addClass('active')
    $('#tab-register').removeClass('active')

}

function showRegisterForm() {
    $('#login').hide()
    $('#register').show()
    $('#tab-register').addClass('active')
    $('#tab-login').removeClass('active')
}

function login() {
    Swal.fire({
        title: "Logging in",
        onOpen() {
            Swal.showLoading()
        }
    })
    ajax.post('/users/login', {
        identity: $('#identity').val(),
        password: $('#login-password').val()
    })
        .then(({ data }) => {
            localStorage.setItem('token', data.token)
            localStorage.setItem('email', data.email)
            localStorage.setItem('username', data.username)
            Swal.close()
            checkLogin()
        }).catch(({ response: { data: error } }) => Swal.fire({
            type: 'error',
            title: "Fail logging in",
            text: error
        }));
}

$('#login-form').on('submit', e => {
    e.preventDefault()
    login()
})

function destroyCredentials() {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('username')
    checkLogin()
}

function logout() {
    Swal.fire({
        title: "Logging out",
        onOpen() {
            Swal.showLoading()
        }
    })

    destroyCredentials()
    Swal.close()
}

function verifyUser() {
    if (localStorage.getItem('token')) {
        Swal.fire({
            title: "Verifying User",
            onOpen() {
                Swal.showLoading()
            }
        })
        axios.get('/users/verify')
    } else {
        destroyCredentials()
    }
}

function register() {
    Swal.fire({
        title: "Registering User",
        onOpen() {
            Swal.showLoading()
        }
    })
}