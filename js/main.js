const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



const passOne = document.getElementById('passOne')
const passTwo = document.getElementById('passTwo')



function renderPass() {
    passOne.textContent = createpass()
}


function createpass(){
    for(let i = 0; i < characters.length; i++){
       if( characters[i] < 10){
          const sum = Math.floor(Math.random() * characters.length)
       
          return(characters[sum]) 
       }
       
       
    }
}


// return Math.floor(Math.random(characters[i]) * characters.length)