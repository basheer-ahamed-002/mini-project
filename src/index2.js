const email=document.querySelector(".email");
const password=document.querySelector(".password");
const name=document.querySelector(".name")

function btn(){
    if(email.value ===''||password.value ===''||name.value===''){
        alert("pls fill the form completely")
    }
    else{
        alert("sucessfully sign in")
    }
}