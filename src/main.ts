const rangeBirth=document.getElementById("birthDate")as HTMLInputElement;
const resultOfBirthDate= document.getElementById("resultOfBirthDate")as HTMLInputElement;
console.log(rangeBirth);
rangeBirth.addEventListener("input",(e:Event)=>{
     let target=e.target as HTMLInputElement;
     resultOfBirthDate.innerHTML=target.value;
})

