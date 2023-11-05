// When the "Login" button is clicked, validate the email and password.
const flights = [
    {
        from: "Tel aviv",
        to:'amsterdam',
        price: 40,
        dates:[
            {depart: new Date ('24.11.2023')},
            {return: new Date ('1.12.2023')}
        ]
    },
    {
        from: "Tel aviv",
        to:'london',
        price: 75,
        dates:[
            {depart: new Date ('28.11.2023')},
            {return: new Date ('12.12.2023')}
        ]
    },
    {
        from: "Athens",
        to:'Prague',
        price: 95,
        dates:[
            {depart: new Date ('28.11.2023')},
            {return: new Date ('12.12.2023')}
        ]
    },
    {
        from: "Berlin",
        to:'Prague',
        price: 22,
        dates:[
            {depart: new Date ('28.11.2023')},
            {return: new Date ('12.12.2023')}
        ]
    },
    {
        from: "London",
        to:'Berlin',
        price: 100,
        dates:[
            {depart: new Date ('28.11.2023')},
            {return: new Date ('12.12.2023')}
        ]
    }
]
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    // Get user input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const isAdmin = document.getElementById("isAdmin").checked;
    const validEmail = "example@example.com";
    const validPassword = "123";
    console.log(validEmail,'<--valid email');
    console.log(validPassword,'<-- valid password');
    if (email === validEmail && password === validPassword) {
        const user = {
            email: email,
            isAdmin: isAdmin
        };
        localStorage.setItem("user", JSON.stringify(user));
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("logoutButton").style.display = "block";
        
    } else {
        alert("Invalid email or password, please try again.");
    }
});
document.getElementById("logoutButton").addEventListener("click", function () {
    localStorage.removeItem("user");
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("logoutButton").style.display = "none";
});

