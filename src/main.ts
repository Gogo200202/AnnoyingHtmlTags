class Stack<T> {
     private size: number;
     public items: T[];
   
     constructor() {
       this.size = 0;
       this.items = [];
     }
   
     push(value: T): void {
       this.items.push(value);
       this.size++;
     }
   
     pop(): T {
       if (this.isEmpty()) {
         throw new Error("Stack underflow: cannot pop from an empty stack");
       }
       return this.items.pop()!;
       this.size--;
     }
   
     isEmpty(): boolean {
       return this.size === 0;
     }
   
     getSize(): number {
       return this.size;
     }
   
     peek(): T | undefined {
       if (this.isEmpty()) {
         return undefined;
       }
       return this.items[this.items.length - 1];
     }
   
     clear(): void {
       if (this.isEmpty()) {
         throw new Error("Stack empty: Can not clear empty stack");
       }
       this.items = [];
       this.size = 0;
     }
   
     contains(value: T): boolean {
       if (this.isEmpty()) {
         return false;
       }
       return this.items.includes(value);
     }
   
     toString(): string {
       return JSON.stringify(this.items);
     }
   
     clone(): T[] {
       return [...this.items]; // shallow cloning
     }
   }
   



// age
const rangeBirth=document.getElementById("birthDate")as HTMLInputElement;
const resultOfBirthDate= document.getElementById("resultOfBirthDate")as HTMLInputElement;
rangeBirth.addEventListener("input",(e:Event)=>{
     let target=e.target as HTMLInputElement;
     resultOfBirthDate.innerHTML=target.value;
})

//userName 
let stackOfWords=new Stack<string>();
let allWords=new Stack<string>();
const buttons=document.querySelectorAll(".grid-item")as NodeListOf<HTMLButtonElement> ;
const deleteButton=document.getElementById("DeleteLastWord") as HTMLButtonElement;
const field=document.getElementById("UserName") as HTMLInputElement ;
field.value="";
buttons.forEach(x=>x.addEventListener("click",clickButton));
let index:number=0;

deleteButton.addEventListener("click",()=>{
  allWords.pop();
  stackOfWords.pop();
  index=0;
  let finalWord:string=allWords.items.join("");
  field.value=finalWord;
})


function myCallback(){
  
  if(!stackOfWords.isEmpty()){
    let word=stackOfWords.pop();
     word="@";
     stackOfWords.push(word);
  }
 
}
function clickButton(e:Event){
  setTimeout(myCallback,1500);
let target=e.target as HTMLButtonElement;
let word=target.innerText;

let lastWordInStack=stackOfWords.peek();

if(word==lastWordInStack){
index++;
if(word.length-1<index){
return;
}

let lastWord:string=allWords.pop();
allWords.push(word[index]);

}else{

     stackOfWords.push(word);
     index=0;
     allWords.push(word[index]);
}

let finalWord=allWords.items;
console.log(finalWord);
field.value=finalWord.join("");

}


