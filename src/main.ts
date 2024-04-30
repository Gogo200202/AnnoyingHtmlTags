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
    stackOfWords.pop();
    
     stackOfWords.push("@");
  }
 
}
function clickButton(e:Event){
  setTimeout(myCallback,2000);
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
console.log(stackOfWords.items);
field.value=finalWord.join("");

}

// password drawing 
const canvas = document.getElementById("Canvas") as HTMLCanvasElement;
class Positions{
  public X:number;
  public Y:number;
  public W:number;
  public H:number;



  constructor(x: number, y: number, w: number, h: number){
  this.X=x;
  this.Y=y;
  this.W=w;
  this.H=h;
  }
}

let x:number=1;
let y:number=1;
let w:number=10;
let h:number=10;
if (canvas.getContext) {
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  const rectangle = new Path2D();
  rectangle.rect(x, y, w, h);
  ctx.reset();

  ctx.fill(rectangle);
 
}
let savedCoordinations:Positions[]=[]
document.addEventListener('keydown', (event) => {


  
       
  if(event.code=="ArrowDown"){
    if(y==90){
  return;
    }
  y++;
  }
  if(event.code=="ArrowUp"){
    if(y==0){
      return;
    }
    y--;
    }

    if(event.code=="ArrowRight"){
      if(x==190){
return;
      }
      x++;
      }

      if(event.code=="ArrowLeft"){
       if(x==0){
 return;
       }
        x--;
        }
        if(event.code=="Enter"){
          let position=new Positions(x,y,w,h);
          savedCoordinations.push(position);
        }

  console.log(event.code)

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  
    const rectangle = new Path2D();
    rectangle.rect(x, y, w, h);
    ctx.reset();
    for (let i = 0; i < savedCoordinations.length; i++) {
      const rectangle = new Path2D();
      
    rectangle.rect(savedCoordinations[i].X, savedCoordinations[i].Y, savedCoordinations[i].W, savedCoordinations[i].H);
    ctx.fill(rectangle);
    }
    ctx.fill(rectangle);
   
  }
  

});

//the joystick
let drag=false;
let clientX:number=0;
let clientY:number=0;

let joystick=document.getElementById("joystick") as  HTMLImageElement; 
document.addEventListener("mousedown", function (event:any) {


  if(event.target.id=="joystick"){
    
    clientX=event.clientX;
    clientY=event.clientY;
    drag=true
  }



});

document.addEventListener("mouseup", function (event:any) {


  joystick.src="./svg/base.svg"

    drag=false;
    
  



});
document.addEventListener("mousemove", function (event:any) {


  if(drag){


     
    if((clientY-event.clientY)<0){

      if(y>=90){
        
    return;
      }
    y++;
    }
     if((clientY-event.clientY)>0){

      if(y<=0){
        return;
      }
      y--;
      }
  
      if((clientX-event.clientX)<0){
        joystick.src="./svg/right.svg"
    
        if(x==190){
  return;
        }
        x++;
        }
  
       else if((clientX-event.clientX)>0){
        joystick.src="./svg/left.svg"
         if(x==0){
   return;
         }
          x--;
          }

           if(event.code=="Enter"){
            let position=new Positions(x,y,w,h);
            savedCoordinations.push(position);
          }
  

  
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    
      const rectangle = new Path2D();
      rectangle.rect(x, y, w, h);
      ctx.reset();
      for (let i = 0; i < savedCoordinations.length; i++) {
        const rectangle = new Path2D();
        
      rectangle.rect(savedCoordinations[i].X, savedCoordinations[i].Y, savedCoordinations[i].W, savedCoordinations[i].H);
      ctx.fill(rectangle);
      }
      ctx.fill(rectangle);
     
    }

  }


  

});


// volume hummer game
// hit to go up
let hammerSVG=document.getElementById("hammer") as HTMLImageElement;
const hammerSVGPath="svg/hammer.svg"
let ifHammerClicked:boolean=false;
document.addEventListener("mousedown", function (event:any) {


  if(event.target.id=="hammer"){
    
    hammerSVG.src="https://upload.wikimedia.org/wikipedia/commons/7/70/Solid_white.svg"
    ifHammerClicked=true;
  }

 

});

let testBoal=document.createElement("img");

testBoal.style.width="100px";
testBoal.style.height="100px";
testBoal.src="svg/hammer.svg";
testBoal.style.transformOrigin="bottom left"
//testBoal.style.backgroundColor="#bbb"
//testBoal.style.borderRadius="50%"
testBoal.style.position="absolute"

testBoal.style.top="0"
testBoal.style.right="0"



let hammervolue=document.getElementById("hammerVolume") as HTMLElement;
hammervolue.appendChild(testBoal);
//make hammer physicks 
let cx:string;
let cy:string;
document.addEventListener("mousemove", function (event:MouseEvent) {
//document.body.style.cursor="none"
//console.log(event.clientY+'y')
//console.log(event.clientX+'x')

cx= (event.clientY-90).toString()+"px";
cy= (event.clientX+5).toString()+"px";

 

});

//animation loop
//implement momentum

//float dt = (time between last frame and this frame measured in seconds);
//acceleration = 9.8f; 
//velocity += acceleration * dt;
//position += velocity * dt;

//gravity imp
const dt = 1.0 / 60;
const acceleration:number = 9.8;
let resultoForVelocity:number= (acceleration * dt);
let resultForPosition:number=(resultoForVelocity * dt);
// rotate hammer
let rotation:number=0;

window.setInterval(() => {
 // debugger




 
let velocity:number=resultoForVelocity;
resultoForVelocity +=velocity;
let position:number = resultForPosition;
resultForPosition+=position;

  //testBoal.style.top=((resultForPosition/240).toString())+"px";
  testBoal.style.top= cx;
  testBoal.style.left= cy;

 //rotation
 rotation++;
 testBoal.style.rotate=`${rotation}deg`;


}, 1000 / 60);

