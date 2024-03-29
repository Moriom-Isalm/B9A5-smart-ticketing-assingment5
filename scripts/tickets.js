   ///function setBackgroundColourById(elementId){
   // /const element = document.getElementById(elementId);
   // element.kdb.classList.add('bg-greean-400');
//}

//document.addEventListener.kdb.classList.add('bg-greean-400');
 
const seats= document.querySelectorAll('.kbd');
for(const seat of seats){
    seat.addEventListener('click',function(event){
        seat.classList.add('bg-greean-400');
        console.log(event);
    })
}

