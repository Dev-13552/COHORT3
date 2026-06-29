function checkUser(isProtected){
    const user = localStorage.getItem("user");

    if(isProtected && !user){
        window.location.href = 'login.html';
    }
    else if(!isProtected && user){
        window.location.href = 'index.html';
    }
    
}

function registerUser(username, password, currency = '$'){
    let users = JSON.parse(localStorage.getItem("registeredUsers") ) || [];

    const user = users.find((user) => user.username == username);

    if(user){
        return { success: false, message: "Username already exists!" };
    }

    const newUser = {username, password, currency};
    users.push(newUser)
    localStorage.setItem("registeredUsers", JSON.stringify(users))
    return {success: true, message: "User registered Successfully, Please Login."}
}

function loginUser(username, password){
    let users = JSON.parse(localStorage.getItem("registeredUsers") ) || [];

    const user = users.find((user) => user.username == username);

    if(!user){
        return { success: false, message: "User not exists!" };
    }
    
    if(user.password !== password){
        return { success: false, message: "Password does not match" };
    }

    localStorage.setItem("user", JSON.stringify(user));
    return {success: true, message: "User Logged In Successfully, Click ok to see dashboard"};

}

function logoutUser() {
    localStorage.removeItem('user');
    window.location.replace('login.html');
}