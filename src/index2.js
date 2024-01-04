const email=document.querySelector(".email");
const password=document.querySelector(".password");
const name1=document.querySelector(".name")

function btn(){
    if(email.value ===''||password.value ===''||name1.value===''){
        alert("pls fill the form completely")
    }
    else if(email.value===''||password.value===''){
        alert("pls fill the form completely")
    }
    else{
        alert("sucessfully sign in")
    }
}