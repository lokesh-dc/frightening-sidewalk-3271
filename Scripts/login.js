import navbar from "../Components/navbar.js"
import footer from "../Components/footer.js"
document.getElementById("navbar").innerHTML = navbar()
document.getElementById("footer").innerHTML = footer()



document.getElementById("btn112").addEventListener("click",login)
async function login(){
    let login_data = {
        username : document.getElementById("emailLogin").value,
        password : document.getElementById("passwordLogin").value,
    }
    login_data = JSON.stringify(login_data)
    let loginLink = "https://masai-api-mocker.herokuapp.com/auth/login";
    let response = await fetch(loginLink,{
        method : "POST",
        body : login_data,
        headers: {
            'Content-type': 'application/json'
        }
    })
    let data = await response.json()
    if(data.error===false){
        alert("Login Successfull")
        window.location.href = "./account.html"
    }else{
       alert("Check Username or Password")
    }
}

document.getElementById("create").addEventListener("click",function(){
    window.location.href = "./signup.html"
})




document.getElementById("logoDiv").addEventListener("click",function(){
    alert("Option not available Login Manually")
})