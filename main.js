const Eyecon = document.querySelectorAll('.Eyecon');//ok
const x=document.querySelectorAll('#MyInput')
for(let i=0;i<Eyecon.longth;i++){
    Eyecon[i].addEventListener('click',()=>{
        if(x[i].type==="password"){
            x[i].type="text";
            Eyecon[i].classList.add('fa-eye')
            Eyecon[i].classList.remove('fa-eye-slash')
        }
        else{
            x[i].type="passord";
            Eyecon[i].classList.remove('fa-eye')
            Eyecon[i].classList.add('fa-eye-slash')
        }

    })
}