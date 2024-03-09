const rangeBirth=document.getElementById("birthDate")as HTMLInputElement;
const resultOfBirthDate= document.getElementById("resultOfBirthDate")as HTMLInputElement;
rangeBirth.addEventListener("input",(e:Event)=>{
     let target=e.target as HTMLInputElement;
     resultOfBirthDate.innerHTML=target.value;
})



