const taskOne = (passengers:number, shuffle:number)=>{
    //complete your work here
    type Creator ={
        [key:string ] : string;
    };
 

let boarders:string[] = []

   for (let i = 0; i < passengers; i++) {
       boarders[i] =`passengers${i+1}`
   }

//    console.log(boarders);
   let count:number =0;
   let boarded:[] =[]
   const destinations:string[] =['Abuja', 'Benue', 'Lagos', 'Katsina', 'Sambisa']; 
   let station:[] = []
   for (let i = 0; i < boarders.length; i++) { 
       for (let j = 0; j< destinations.length; j++) {
          let obj = {
              name: boarders[j],
              location:destinations[j]
          } as Creator 
          station.push(obj)
        //   console.log(station);
          console.log(station.length);
          if (station.length === 5) {
              boarded.push(...station)
              count++
              station = []
              boarded.splice(0, 5)
          }           
       }
       

   }
   let reservation = [];
   let remainder = passengers % 5;
   console.log(remainder);

   
   if(passengers<5){
     boarded.filter((people)=>{
         if (people['name']) {
            reservation.push(people)
         }
     })
    
   }
console.log(boarded);


   return {
    boarded:[],
    reservation:[],
    count:0
} 


}
export default taskOne;

taskOne(37, 4)