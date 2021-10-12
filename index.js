//1
const footballPoints = (wins,draws,losses)=>{

    if(wins>=0 && draws>=0 && losses>=0){

        const result = (wins*3)+(draws*1)+(losses*0);
        console.log(result);

    }else{

        console.log("Input should be greater or equal to zero");
    }
}
footballPoints(3,4,2);
footballPoints(5,0,2);
footballPoints(0,0,1);

//2
const calculatedFuel = (distance) =>{

    if(distance >0){

        fuel = 5 * distance;
        if(fuel < 20){
          console.log("20 litres");
        }else{
          console.log(fuel);
        }

    }else{
          console.log("Distance should be greated than zero");
    }  
}
calculatedFuel(15);
calculatedFuel(20);
calculatedFuel(38);
calculatedFuel(3);

//3
const acceptIntoCinema = (age,isSupervised) => {

    if(age>=15 || isSupervised){
      return true;
    }else{
      return false;
    }
}
acceptIntoCinema(12,true);
acceptIntoCinema(13,false);
acceptIntoCinema(16,false);
acceptIntoCinema(18,false);

//4
const findIndex = (arr, str) => {

    return arr.indexOf(str);
}

findIndex(["hi", "zatec", "Rwanda", "training"], "Rwanda");
findIndex(["iPhone", "iPad", "iMac", "MacBook Air"], "iPad");
findIndex(["html", "css", "javascript", "tailwindcss"], "css");
findIndex(["toyota", "mercedes benz", "volkswagen", "maclaren"], "toyota");



//5
const serveDrinks =(age,breakSession)=>{

    if(age>=18 && !breakSession){
      return true;
    }else{
      return false;
    }
}
serveDrinks(17,true);
serveDrinks(19,false);
serveDrinks(30,true);



//6i
const addition = (num1,num2) => {

    const sum = num1+num2;
    return sum; 
}
addition(6,2);

//6ii
const range = (num) => {

    if(num>=0 && num<=15){
       return true;
    }else{
       return false;
    }
}
range(12);

//6iii
const summation = (num1,num2) =>{

    if(isNaN(num1)){
        console.log(` ${num1} is not a number`);
    }else if (isNaN(num2)){
        console.log(` ${num2} is not a number`);

    }else{
        const sum = num1+num2;
        return sum; 

    }
}
summation("Nadine",32);
summation(34,12);


//7
const multipleNumber =()=>{

   for(let i=1;i<=40;i++){

      if(i % 3 == 0){
          console.log(i);
      }
  } 
}
multipleNumber();





//8
const oddOrEven =()=>{
    for(var i=0; i<=15;i++){
      if( i % 2 == 0){
          console.log(i +" => even");
      }else{
          console.log(i +" => odd");
      }
  }  
}
oddOrEven();





//9
const myAge =(myYear) => {
    let date = new Date();
    let year = date.getFullYear();
    let age = year - myYear;

    console.log(`I am ${age} years old`);
}
myAge(2001);


//10
const capitalize = (word) => {
    const arr = word.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
    const newArray = arr.join(" ");
    
    console.log(newArray);
  
}
capitalize("have fun");
capitalize("be happy and enjoy life");