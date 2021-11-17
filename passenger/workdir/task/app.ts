const taskOne = (passengers:number, shuffle:number)=>{
    //complete your work here
//     type Creator ={
//         [key:string ] : string;
//     };
 

// let boarders:string[] = []

//    for (let i = 0; i < passengers; i++) {
//        boarders[i] =`passengers${i+1}`
//    }

// //    console.log(boarders);
//    let count:number =0;
//    let boarded:[] =[]
//    const destinations:string[] =['Abuja', 'Benue', 'Lagos', 'Katsina', 'Sambisa']; 
//    let station:[] = []
//    for (let i = 0; i < boarders.length; i++) { 
//        for (let j = 0; j< destinations.length; j++) {
//           let obj = {
//               name: boarders[j],
//               location:destinations[j]
//           } as Creator 
//           station.push(obj)
//         //   console.log(station);
//           console.log(station.length);
//           if (station.length === 5) {
//               boarded.push(...station)
//               count++
//               station = []
//               boarded.splice(0, 5)
//           }           
//        }
       

//    }
//    let reservation = [];
//    let remainder = passengers % 5;
//    console.log(remainder);

   
//    if(passengers<5){
//      boarded.filter((people)=>{
//          if (people['name']) {
//             reservation.push(people)
//          }
//      })
    
//    }
// console.log(boarded);


//    return {
//     boarded:[],
//     reservation:[],
//     count:0
// } 

interface PassengerInt {
    name: string;
    location: string;
  }
  interface Output {
    boarded: object[];
    reservation: object[];
    count: number;
  }
  let locations: string[] = ["Abuja", "Benue", "Katsina", "Lagos", "Sambisa"];
  let passangerGenerator = function (passengers: number): object[] {
    let passengerArr: object[] = [];
    for (let i = 0; i < passengers; i++) {
      let passenger: PassengerInt = {
        name: "",
        location: "",
      };
      let locationIndex = i % 5;
      let passengerIndex = i + 1;
      passenger.location = locations[locationIndex];
      passenger.name = `passenger${passengerIndex}`;
      passengerArr.push(passenger);
    }
      console.log(passengerArr);
    return passengerArr;
  };
  const taskOne = (passengers: number, shuffle: number) => {
    // complete your work here
    let output: Output = {
      boarded: [],
      reservation: [],
      count: 0,
    };
    let totalPassengers = passangerGenerator(passengers);
      console.log(totalPassengers);
    if (totalPassengers.length < 5) {
      totalPassengers.forEach((el) => output.reservation.push(el));
      return output;
    }
    if (totalPassengers.length <= 50 && totalPassengers.length >= 5) {
      let remainder: number = totalPassengers.length % 5;
      let extraPassengers: object[] = totalPassengers.splice(
        totalPassengers.length - remainder
      );
      extraPassengers.forEach((el) => output.reservation.push(el));
      totalPassengers.forEach((el) => output.boarded.push(el));
      output.count += 1;
      // console.log(output);
      return output;
    }
    if (totalPassengers.length > 50 && shuffle <= 0) {
      let extraPassengers: object[] = totalPassengers.splice(50);
      extraPassengers.forEach((el) => output.reservation.push(el));
      totalPassengers.forEach((el) => output.boarded.push(el));
      output.count += 1;
      console.log(output);
      return output;
    }
    if (totalPassengers.length > 50 && shuffle > 0) {
      shuffle += 1;
      while (totalPassengers.length > 50 && shuffle > 1) {
        shuffle -= 1;
        output.count += 1;
        totalPassengers = totalPassengers.splice(50);
      }
        if (shuffle > 1) {
        let remainder: number = totalPassengers.length % 5;
        let extraPassengers: object[] = totalPassengers.splice(
          totalPassengers.length - remainder
        );
        extraPassengers.forEach((el) => output.reservation.push(el));
        totalPassengers.forEach((el) => output.boarded.push(el));
        output.count += 1;
        shuffle -= 1;
        //   console.log(shuffle)
        } else {
             console.log(totalPassengers)
        let extraPassengers = totalPassengers.splice(50);
        //   console.log(totalPassengers);
        totalPassengers.forEach((el) => output.boarded.push(el));
        extraPassengers.forEach((el) => output.reservation.push(el));
        output.count += 1;
        shuffle -= 1;
      }
    }
    return output;
  };
  // taskOne(133, 1);
//   console.log(taskOne(1840, 2));
//   export default taskOne;
}
export default taskOne;

taskOne(37, 4)