//Student Grade generator
function gradeGenerator(marks){
    if (marks >79){
        return "A"
    }
    else if (marks > 60 && marks < 79){
        return "B-"
    }
    else if (marks > 59 && marks < 60){
        return "C-"
    }
    else if (marks > 40 && marks < 59){
        return "D-"
    }
    else if (marks > 40){
        return "E"
    }
}

//speed detector
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
  
    if (speed < speedLimit) {
      console.log("Ok");
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
      if (demeritPoints > 12) {
        console.log("License suspended");
      } else {
        console.log("Points: " + demeritPoints);
      }
    }
  }
  

  checkSpeed(80); 
  checkSpeed(75); 
  checkSpeed(65); 
  checkSpeed(130); 

  //Net salary Calculator
  
  